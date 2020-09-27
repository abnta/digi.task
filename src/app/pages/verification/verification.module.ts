import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"
import { VerificationComponent } from "./verification.component"
import { Routes, RouterModule } from '@angular/router';
import { ModalModule } from "ngx-bootstrap/modal"
import { ModalsService } from "./components/modals/modals.service"

const routes: Routes = [
    {
        path: "",
        component: VerificationComponent
    }
]
@NgModule({
    declarations: [VerificationComponent],
    providers: [ ModalsService ],
    imports: [
        CommonModule,
        ModalModule.forChild(),
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class VerificationModule {}