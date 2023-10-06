import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from 'src/app/shared/directives.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, DirectivesModule, RouterModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [],
})
export class HeaderModule {}
