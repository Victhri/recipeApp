import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StoreDataService } from 'src/app/shared/store-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private storeDataService: StoreDataService) {}
  collapsed = true;
  onSaveData() {
    this.storeDataService.storeRecipes();
  }
  onFetchData() {
    this.storeDataService.fetchRecipes().subscribe();
  }
}
