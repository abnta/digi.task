import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastService } from "./toast.service"
import { Subscription } from 'rxjs';

@Component({
    selector: "digio-toast",
    templateUrl: "./toast.component.html",
    styleUrls: ["./toast.component.scss"]
})

export class ToastComponent implements OnInit, OnDestroy {
    toasts: any[];
    toastsSubscription: Subscription;
    constructor (private toastService: ToastService) {}

    ngOnInit () {
        this.toastsSubscription = this.toastService.exposeEvent().subscribe(event => {
            this.handleToastEvent(event)
        })
        this.getToasts()
    }

    getToasts() {
        this.toasts = this.toastService.toasts;
    }

    handleToastEvent (event) {
        switch (event.type) {
            case "refreshedToasts": {
                this.getToasts()
                break;
            }
        }
    }

    ngOnDestroy () {
        this.toastsSubscription?.unsubscribe()
    }
}