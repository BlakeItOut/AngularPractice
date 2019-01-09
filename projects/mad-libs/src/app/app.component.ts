import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mad-libs';
  aNumber: number = 1;
  bNumber: number = 2;
  canSave: boolean;
  isSpecial: boolean;
  stylesList() {
    let styles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px'
    }
    return styles
  }
}
