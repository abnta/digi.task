import { Component, OnInit } from '@angular/core';
import { ModalsService } from "./components/modals/modals.service";
import { ToastService } from "src/app/components/toast/toast.service"
import { DUMMY_DATA } from "src/app/mockup"

@Component({
    selector: "digio-verification",
    templateUrl: "./verification.component.html",
    styleUrls: ["./verification.component.scss"]
})

export class VerificationComponent implements OnInit {
    verificationDocumnet = DUMMY_DATA;
    constructor (private modalService: ModalsService, private toastService: ToastService) {}

    ngOnInit () {
        this.modalService.openVerificationModal({ config: { verifyCallback: this.onVerifyCallback.bind(this) } })
    }

    onVerifyCallback () {
        this.toastService.addToast({information: 'Adhar verified successfully'})
    }
}
