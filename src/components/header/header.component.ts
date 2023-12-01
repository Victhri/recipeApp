import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { StoreDataService } from 'src/app/shared/store-data.service';
import { User } from '../auth/user.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy{
  constructor(private storeDataService: StoreDataService, private authService: AuthService) {}

  collapsed = true;
  user = new Subject<User>();
  private userSubscription!: Subscription;
  isAuthenticated = false;

  onSaveData() {
    this.storeDataService.storeRecipes();
  }
  onFetchData() {
    this.storeDataService.fetchRecipes().subscribe();
  }
  ngOnInit() {
    this.userSubscription = this.authService.userSubject.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log("---!user-----", !user);
      console.log("---!!user-----", !!user);
    })
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
