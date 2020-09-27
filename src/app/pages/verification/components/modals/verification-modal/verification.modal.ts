import { Component } from "@angular/core";
import {  BsModalRef } from 'ngx-bootstrap/modal'

@Component({
    selector: "digio-verification-modal",
    templateUrl: "./verification.modal.html",
    styleUrls: ["./verification.modal.scss"]
})

export class VerificationModal {
    constructor(private bsModalRef: BsModalRef) {}
    config: any;

    onSubmit () {
        this.config.verifyCallback()
        this.bsModalRef.hide();
    }
}