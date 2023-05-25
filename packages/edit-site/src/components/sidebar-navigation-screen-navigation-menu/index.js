/**
 * WordPress dependencies
 */
import { useEntityRecord, store as coreStore } from '@wordpress/core-data';
import {
	__experimentalUseNavigator as useNavigator,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	Button,
	DropdownMenu,
	Spinner,
	TextControl,
	MenuItem,
	MenuGroup,
	Modal,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useCallback, useMemo, useState } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { privateApis as routerPrivateApis } from '@wordpress/router';
import { BlockEditorProvider } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { decodeEntities } from '@wordpress/html-entities';
import { moreVertical } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { unlock } from '../../private-apis';
import { store as editSiteStore } from '../../store';
import {
	isPreviewingTheme,
	currentlyPreviewingTheme,
} from '../../utils/is-previewing-theme';
import { SidebarNavigationScreenWrapper } from '../sidebar-navigation-screen-navigation-menus';
import NavigationMenuContent from '../sidebar-navigation-screen-navigation-menus/navigation-menu-content';

const { useHistory } = unlock( routerPrivateApis );
const noop = () => {};

export default function SidebarNavigationScreenNavigationMenu() {
	const { deleteEntityRecord } = useDispatch( coreStore );
	const [ isOpen, setOpen ] = useState( false );
	const postType = `wp_navigation`;
	const {
		params: { postId },
	} = useNavigator();

	const { record: navigationMenu, isResolving: isLoading } = useEntityRecord(
		'postType',
		postType,
		postId
	);

	const menuTitle = navigationMenu?.title?.rendered || navigationMenu?.slug;

	const modalProps = {
		postId,
		isOpen,
		setOpen,
		deleteEntityRecord,
		menuTitle,
	};

	if ( isLoading ) {
		return (
			<SidebarNavigationScreenWrapper
				description={ __(
					'Navigation menus are a curated collection of blocks that allow visitors to get around your site.'
				) }
			>
				<Spinner className="edit-site-sidebar-navigation-screen-navigation-menus__loading" />
			</SidebarNavigationScreenWrapper>
		);
	}

	if ( ! isLoading && ! navigationMenu ) {
		return (
			<SidebarNavigationScreenWrapper
				description={ __( 'Navigation Menu missing.' ) }
			/>
		);
	}

	if ( ! navigationMenu?.content?.raw ) {
		return (
			<SidebarNavigationScreenWrapper
				title={ decodeEntities( menuTitle ) }
				description={ __( 'This Navigation Menu is empty.' ) }
			/>
		);
	}

	return (
		<SidebarNavigationScreenWrapper
			actions={ ScreenNavigationMoreMenu( modalProps ) }
			title={ decodeEntities( menuTitle ) }
			description={ __(
				'Navigation menus are a curated collection of blocks that allow visitors to get around your site.'
			) }
		>
			<NavigationMenuEditor navigationMenu={ navigationMenu } />
		</SidebarNavigationScreenWrapper>
	);
}

function NavigationMenuEditor( { navigationMenu } ) {
	const history = useHistory();

	const onSelect = useCallback(
		( selectedBlock ) => {
			const { attributes, name } = selectedBlock;
			if (
				attributes.kind === 'post-type' &&
				attributes.id &&
				attributes.type &&
				history
			) {
				history.push( {
					postType: attributes.type,
					postId: attributes.id,
					...( isPreviewingTheme() && {
						theme_preview: currentlyPreviewingTheme(),
					} ),
				} );
			}
			if ( name === 'core/page-list-item' && attributes.id && history ) {
				history.push( {
					postType: 'page',
					postId: attributes.id,
					...( isPreviewingTheme() && {
						theme_preview: currentlyPreviewingTheme(),
					} ),
				} );
			}
		},
		[ history ]
	);

	const { storedSettings } = useSelect( ( select ) => {
		const { getSettings } = unlock( select( editSiteStore ) );

		return {
			storedSettings: getSettings( false ),
		};
	}, [] );

	const blocks = useMemo( () => {
		if ( ! NavigationMenuEditor ) {
			return [];
		}

		return [
			createBlock( 'core/navigation', { ref: navigationMenu?.id } ),
		];
	}, [ navigationMenu ] );

	if ( ! navigationMenu || ! blocks?.length ) {
		return null;
	}

	return (
		<BlockEditorProvider
			settings={ storedSettings }
			value={ blocks }
			onChange={ noop }
			onInput={ noop }
		>
			<div className="edit-site-sidebar-navigation-screen-navigation-menus__content">
				<NavigationMenuContent
					rootClientId={ blocks[ 0 ].clientId }
					onSelect={ onSelect }
				/>
			</div>
		</BlockEditorProvider>
	);
}

const POPOVER_PROPS = {
	position: 'bottom right',
	variant: 'toolbar',
};

function ScreenNavigationMoreMenu( props ) {
	const { postId, isOpen, setOpen, deleteEntityRecord, menuTitle } = props;
	const closeModal = () => setOpen( false );
	const openModal = () => setOpen( true );

	return (
		<>
			<DropdownMenu
				className="sidebar-navigation__more-menu"
				icon={ moreVertical }
				popoverProps={ POPOVER_PROPS }
			>
				{ ( { onClose } ) => (
					<div>
						<MenuGroup>
							<MenuItem
								onClick={ () => {
									openModal();
									onClose();
								} }
							>
								{ __( 'Rename' ) }
							</MenuItem>
							<MenuItem>{ __( 'Duplicate' ) }</MenuItem>
							<MenuItem
								isDestructive
								isTertiary
								onClick={ () => {
									deleteEntityRecord(
										'postType',
										'wp_navigation',
										postId,
										{ force: true }
									);
									onClose();
								} }
							>
								{ __( 'Delete' ) }
							</MenuItem>
						</MenuGroup>
					</div>
				) }
			</DropdownMenu>

			{ isOpen && (
				<Modal title="Rename" onRequestClose={ closeModal }>
					<form>
						<VStack spacing="3">
							<TextControl
								__nextHasNoMarginBottom
								value={ decodeEntities( menuTitle ) }
								placeholder={ __( 'Navigation title' ) }
							/>
							<HStack justify="right">
								<Button
									variant="tertiary"
									onClick={ closeModal }
								>
									{ __( 'Cancel' ) }
								</Button>

								<Button variant="primary" type="submit">
									{ __( 'Ok' ) }
								</Button>
							</HStack>
						</VStack>
					</form>
				</Modal>
			) }
		</>
	);
}
