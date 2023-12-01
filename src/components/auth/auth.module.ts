import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [AuthComponent],
    declarations: [AuthComponent],
    providers: [],
  })
  export class AuthModule {}