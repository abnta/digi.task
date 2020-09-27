import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common"
import { SigninComponent } from './signin.component'

const routes:Routes = [
    {
        path: "",
        component: SigninComponent
    }
]

@NgModule({
    declarations: [SigninComponent],
    imports: [ CommonModule, RouterModule.forChild(routes) ],
    exports: [RouterModule]
})

export class SigninModule {}