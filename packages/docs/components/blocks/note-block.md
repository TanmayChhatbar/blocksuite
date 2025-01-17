# Note Block

This is a container block used to place flowing document content.

If a document is entirely edited within the [doc editor](../editors/doc-editor), then all of its text content will be placed in a single note block. However, in the [edgeless editor](../editors/edgeless-editor), it allows for placing multiple notes on the canvas, and also for splitting the content of a single note block into multiple different notes.

In the doc editor, the display order of notes is determined by the arrangement order of the note block in the page block `children`. But in the edgeless editor, the position of the note block is determined by the `xywh` field, and its layering with other graphical content is determined by the `index` field. This allows it to be positioned on the whiteboard along with other graphical content.

![block-nesting](../../images/block-nesting.png)

## Reference

- [`NoteBlockSchema`](/api/@blocksuite/blocks/variables/NoteBlockSchema.html)
- [`NoteService`](/api/@blocksuite/blocks/classes/NoteService.html)
