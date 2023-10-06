import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor() {}
  collapsed = true;
  // @Output() valueSelected = new EventEmitter<string>();
  // onSelect(value: string) {
  //   this.valueSelected.emit(value);
  // }
}
