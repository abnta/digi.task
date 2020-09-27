import { Injectable } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal"
import { VerificationModal } from "./verification-modal/verification.modal"

@Injectable({
    providedIn: "any"
})

export class ModalsService {
    modalRef: BsModalRef;
    constructor (private modalService: BsModalService) {}

    openVerificationModal (initialState) {
        this.modalRef = this.modalService.show(VerificationModal, {initialState})
    }
}