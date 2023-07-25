import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'recipe-app';
  loadedValue = 'reciepe';
  onNavigate(value: string) {
    this.loadedValue = value;
  }
}
