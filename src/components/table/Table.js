import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {resizeHandler} from '@/components/table/Table.resize';
import {shoildResize} from '@/components/table/table.functions';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }
  toHTML() {
    return createTable(100);
  }
  onMousedown(event) {
    if (shoildResize(event)) {
      resizeHandler(this.$root, event);
    }
  }
}
