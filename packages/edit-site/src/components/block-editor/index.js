/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
import { useMemo, useRef, useEffect } from '@wordpress/element';
import {
	useEntityBlockEditor,
	useEntityId,
	store as coreStore,
} from '@wordpress/core-data';
import {
	BlockList,
	BlockInspector,
	BlockTools,
	__unstableUseClipboardHandler as useClipboardHandler,
	__unstableUseTypingObserver as useTypingObserver,
	BlockEditorKeyboardShortcuts,
	store as blockEditorStore,
	privateApis as blockEditorPrivateApis,
} from '@wordpress/block-editor';

import {
	useMergeRefs,
	useViewportMatch,
	useResizeObserver,
} from '@wordpress/compose';
import { ReusableBlocksMenuItems } from '@wordpress/reusable-blocks';
import { createBlock } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import inserterMediaCategories from './inserter-media-categories';
import TemplatePartConverter from '../template-part-converter';
import { SidebarInspectorFill } from '../sidebar-edit-mode';
import { store as editSiteStore } from '../../store';
import BackButton from './back-button';
import ResizableEditor from './resizable-editor';
import EditorCanvas from './editor-canvas';
import { unlock } from '../../private-apis';
import EditorCanvasContainer from '../editor-canvas-container';
import {
	PageContentLock,
	usePageContentLockNotifications,
} from '../page-content-lock';

const { ExperimentalBlockEditorProvider, useBlockEditingMode } = unlock(
	blockEditorPrivateApis
);

const LAYOUT = {
	type: 'default',
	// At the root level of the site editor, no alignments should be allowed.
	alignments: [],
};

const FOCUSABLE_ENTITIES = [ 'wp_template_part', 'wp_navigation' ];

export default function BlockEditor() {
	const { setIsInserterOpened } = useDispatch( editSiteStore );
	const { storedSettings, templateType, canvasMode, hasPageContentLock } =
		useSelect(
			( select ) => {
				const {
					getSettings,
					getEditedPostType,
					getCanvasMode,
					hasPageContentLock: _hasPageContentLock,
				} = unlock( select( editSiteStore ) );

				return {
					storedSettings: getSettings( setIsInserterOpened ),
					templateType: getEditedPostType(),
					canvasMode: getCanvasMode(),
					hasPageContentLock: _hasPageContentLock(),
				};
			},
			[ setIsInserterOpened ]
		);

	const settingsBlockPatterns =
		storedSettings.__experimentalAdditionalBlockPatterns ?? // WP 6.0
		storedSettings.__experimentalBlockPatterns; // WP 5.9
	const settingsBlockPatternCategories =
		storedSettings.__experimentalAdditionalBlockPatternCategories ?? // WP 6.0
		storedSettings.__experimentalBlockPatternCategories; // WP 5.9

	const { restBlockPatterns, restBlockPatternCategories } = useSelect(
		( select ) => ( {
			restBlockPatterns: select( coreStore ).getBlockPatterns(),
			restBlockPatternCategories:
				select( coreStore ).getBlockPatternCategories(),
		} ),
		[]
	);

	const blockPatterns = useMemo(
		() =>
			[
				...( settingsBlockPatterns || [] ),
				...( restBlockPatterns || [] ),
			]
				.filter(
					( x, index, arr ) =>
						index === arr.findIndex( ( y ) => x.name === y.name )
				)
				.filter( ( { postTypes } ) => {
					return (
						! postTypes ||
						( Array.isArray( postTypes ) &&
							postTypes.includes( templateType ) )
					);
				} ),
		[ settingsBlockPatterns, restBlockPatterns, templateType ]
	);

	const blockPatternCategories = useMemo(
		() =>
			[
				...( settingsBlockPatternCategories || [] ),
				...( restBlockPatternCategories || [] ),
			].filter(
				( x, index, arr ) =>
					index === arr.findIndex( ( y ) => x.name === y.name )
			),
		[ settingsBlockPatternCategories, restBlockPatternCategories ]
	);

	const settings = useMemo( () => {
		const {
			__experimentalAdditionalBlockPatterns,
			__experimentalAdditionalBlockPatternCategories,
			...restStoredSettings
		} = storedSettings;

		return {
			...restStoredSettings,
			inserterMediaCategories,
			__experimentalBlockPatterns: blockPatterns,
			__experimentalBlockPatternCategories: blockPatternCategories,
		};
	}, [ storedSettings, blockPatterns, blockPatternCategories ] );

	const [ blocks, onInput, onChange ] = useGetBlockEditorState(
		'postType',
		templateType
	);

	const contentRef = useRef();
	const mergedRefs = useMergeRefs( [
		contentRef,
		useClipboardHandler(),
		useTypingObserver(),
		usePageContentLockNotifications(),
	] );
	const isMobileViewport = useViewportMatch( 'small', '<' );
	const { clearSelectedBlock, selectBlock } = useDispatch( blockEditorStore );
	const [ resizeObserver, sizes ] = useResizeObserver();

	const isFocusMode = FOCUSABLE_ENTITIES.includes( templateType );

	const hasBlocks = blocks.length !== 0;
	const enableResizing =
		isFocusMode &&
		canvasMode !== 'view' &&
		// Disable resizing in mobile viewport.
		! isMobileViewport;
	const isViewMode = canvasMode === 'view';
	const isEditMode = canvasMode === 'edit';
	const showBlockAppender =
		( isFocusMode && hasBlocks ) || isViewMode ? false : undefined;

	function SetRootBlockEditingMode( { mode } ) {
		useBlockEditingMode( mode );
		return null;
	}

	useEffect( () => {
		if ( isEditMode && templateType === 'wp_navigation' ) {
			selectBlock( blocks[ 0 ]?.clientId );
		}
	}, [ blocks, templateType, isEditMode, selectBlock ] );

	return (
		<ExperimentalBlockEditorProvider
			settings={ settings }
			value={ blocks }
			onInput={ onInput }
			onChange={ onChange }
			useSubRegistry={ false }
		>
			{ hasPageContentLock && <PageContentLock /> }

			<SetRootBlockEditingMode
				mode={
					templateType === `wp_navigation` ? 'contentOnly' : 'default'
				}
			/>

			<TemplatePartConverter />
			<SidebarInspectorFill>
				<BlockInspector />
			</SidebarInspectorFill>
			<EditorCanvasContainer.Slot>
				{ ( [ editorCanvasView ] ) =>
					editorCanvasView ? (
						<div className="edit-site-visual-editor is-focus-mode">
							{ editorCanvasView }
						</div>
					) : (
						<BlockTools
							className={ classnames( 'edit-site-visual-editor', {
								'is-focus-mode':
									isFocusMode || !! editorCanvasView,
								'is-view-mode': isViewMode,
							} ) }
							__unstableContentRef={ contentRef }
							onClick={ ( event ) => {
								// Clear selected block when clicking on the gray background.
								if ( event.target === event.currentTarget ) {
									clearSelectedBlock();
								}
							} }
						>
							<BlockEditorKeyboardShortcuts.Register />
							<BackButton />
							<ResizableEditor
								enableResizing={ enableResizing }
								height={ sizes.height ?? '100%' }
							>
								<EditorCanvas
									enableResizing={ enableResizing }
									settings={ settings }
									contentRef={ mergedRefs }
									readonly={ canvasMode === 'view' }
								>
									{ resizeObserver }
									<BlockList
										className="edit-site-block-editor__block-list wp-site-blocks"
										__experimentalLayout={ LAYOUT }
										renderAppender={ showBlockAppender }
									/>
								</EditorCanvas>
							</ResizableEditor>
						</BlockTools>
					)
				}
			</EditorCanvasContainer.Slot>
			<ReusableBlocksMenuItems />
		</ExperimentalBlockEditorProvider>
	);
}

/**
 * Returns the appropriate block editor state for a given entity type.
 *
 * Note: Navigation entities require a wrapping Navigation block to provide
 * them with some basic layout and styling. Therefore we create a "ghost" block
 * and provide it will a reference to the navigation entity ID being edited.
 *
 * In this scenario it is the **block** that handles syncing the entity content
 * whereas for other entities this is handled by entity block editor.
 *
 * @param {string} kind the entity kind
 * @param {string} type the entity type
 * @return {[WPBlock[], Function, Function]} The block array and setters.
 */
function useGetBlockEditorState( kind, type ) {
	const noop = () => {};

	const entityId = useEntityId( kind, type );

	const [ entityBlocks, onInput, onChange ] = useEntityBlockEditor(
		kind,
		type,
		{
			id: entityId,
		}
	);

	const wrappedBlocks = useMemo( () => {
		return [
			createBlock( 'core/navigation', {
				ref: entityId,
			} ),
		];
	}, [ entityId ] );

	if ( type === `wp_navigation` ) {
		return [ wrappedBlocks, noop, noop ];
	}

	return [ entityBlocks, onInput, onChange ];
}
