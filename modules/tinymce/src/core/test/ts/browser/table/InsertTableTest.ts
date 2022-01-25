import { describe, it } from '@ephox/bedrock-client';
import { TinyHooks } from '@ephox/wrap-mcagar';

import Editor from 'tinymce/core/api/Editor';

import * as TableTestUtils from '../../module/test/TableUtils';

describe('browser.tinymce.core.table.InsertTableTest', () => {
  const hook = TinyHooks.bddSetup<Editor>({
    indent: false,
    valid_styles: {
      '*': 'width,height,vertical-align,text-align,float,border-color,' +
           'background-color,border,padding,border-spacing,border-collapse'
    },
    base_url: '/project/tinymce/js/tinymce',
    statusbar: false
  }, []);

  it('TBA: insert 2x2 table', () =>
    TableTestUtils.insertTableTest(hook.editor(), 2, 2, [
      [ 50, 50 ],
      [ 50, 50 ]
    ], false)
  );

  it('TBA: insert 1x2 table', () =>
    TableTestUtils.insertTableTest(hook.editor(), 1, 2, [
      [ 100 ],
      [ 100 ]
    ], false)
  );

  it('TBA: insert 2x1 table', () =>
    TableTestUtils.insertTableTest(hook.editor(), 2, 1, [
      [ 50, 50 ]
    ], false)
  );
});