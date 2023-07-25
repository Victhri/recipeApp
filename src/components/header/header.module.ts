import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from 'src/app/shared/directives.module';

@NgModule({
  imports: [CommonModule, DirectivesModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [],
})
export class HeaderModule {}
