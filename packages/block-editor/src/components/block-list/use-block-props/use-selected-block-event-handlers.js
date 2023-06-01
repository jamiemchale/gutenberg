/**
 * WordPress dependencies
 */
import { isTextField } from '@wordpress/dom';
import { ENTER, BACKSPACE, DELETE } from '@wordpress/keycodes';
import { useSelect, useDispatch } from '@wordpress/data';
import { useRefEffect } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import { store as blockEditorStore } from '../../../store';
import { showBlockRemovalWarning } from '../../../utils/show-block-removal-warning';

/**
 * Adds block behaviour:
 *   - Removes the block on BACKSPACE.
 *   - Inserts a default block on ENTER.
 *   - Disables dragging of block contents.
 *
 * @param {string} clientId Block client ID.
 */
export function useEventHandlers( clientId ) {
	const { isSelected, blockName } = useSelect(
		( select ) => {
			return {
				isSelected:
					select( blockEditorStore ).isBlockSelected( clientId ),
				blockName: select( blockEditorStore ).getBlockName( clientId ),
			};
		},
		[ clientId ]
	);
	const { getBlockRootClientId, getBlockIndex } =
		useSelect( blockEditorStore );
	const { insertDefaultBlock, removeBlock, displayRemovalPrompt } =
		useDispatch( blockEditorStore );

	return useRefEffect(
		( node ) => {
			if ( ! isSelected ) {
				return;
			}

			/**
			 * Interprets keydown event intent to remove or insert after block if
			 * key event occurs on wrapper node. This can occur when the block has
			 * no text fields of its own, particularly after initial insertion, to
			 * allow for easy deletion and continuous writing flow to add additional
			 * content.
			 *
			 * @param {KeyboardEvent} event Keydown event.
			 */
			function onKeyDown( event ) {
				const { keyCode, target } = event;

				if (
					keyCode !== ENTER &&
					keyCode !== BACKSPACE &&
					keyCode !== DELETE
				) {
					return;
				}

				if ( target !== node || isTextField( target ) ) {
					return;
				}

				event.preventDefault();

				if ( keyCode === ENTER ) {
					insertDefaultBlock(
						{},
						getBlockRootClientId( clientId ),
						getBlockIndex( clientId ) + 1
					);
				} else if ( showBlockRemovalWarning( blockName ) ) {
					displayRemovalPrompt( true, {
						removalFunction: () => {
							removeBlock( clientId );
						},
						blockName,
					} );
				} else {
					removeBlock( clientId );
				}
			}

			/**
			 * Prevents default dragging behavior within a block. To do: we must
			 * handle this in the future and clean up the drag target.
			 *
			 * @param {DragEvent} event Drag event.
			 */
			function onDragStart( event ) {
				event.preventDefault();
			}

			node.addEventListener( 'keydown', onKeyDown );
			node.addEventListener( 'dragstart', onDragStart );

			return () => {
				node.removeEventListener( 'keydown', onKeyDown );
				node.removeEventListener( 'dragstart', onDragStart );
			};
		},
		[
			clientId,
			isSelected,
			getBlockRootClientId,
			getBlockIndex,
			insertDefaultBlock,
			removeBlock,
		]
	);
}
