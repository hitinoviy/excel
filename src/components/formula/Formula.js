import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  toHTML() {
    return `
       <div class="info">&#402;x</div>
       <div class="input" contenteditable="true" spellcheck="false"></div>
    `;
  }

  onInput() {
    console.log('FormulaOnInput', event.target.textContent.trim());
  }
  onClick() {}
}
