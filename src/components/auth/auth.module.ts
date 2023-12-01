import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { FormsModule } from "@angular/forms";
import { LoadingSpinnerComponent } from "src/app/shared/loading-spinner/loading-spinner.component";
import { RouterModule } from "@angular/router";


@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    exports: [AuthComponent],
    declarations: [AuthComponent, LoadingSpinnerComponent],
    providers: [],
  })
  export class AuthModule {}