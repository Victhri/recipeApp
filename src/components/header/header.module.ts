import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownDirective } from 'src/app/shared/dropdown.directive';

@NgModule({
  imports: [CommonModule, DropdownDirective, RouterModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [],
})
export class HeaderModule {}
