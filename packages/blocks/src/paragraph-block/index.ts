import type { ParagraphService } from './paragraph-service.js';

export * from './paragraph-block.js';
export * from './paragraph-model.js';
export * from './paragraph-service.js';

declare global {
  namespace BlockSuite {
    interface BlockServices {
      'affine:paragraph': ParagraphService;
    }
  }
}
