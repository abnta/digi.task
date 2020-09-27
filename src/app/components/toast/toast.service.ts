import { Injectable } from "@angular/core";
import { Subject } from 'rxjs'

@Injectable({
    providedIn: "root"
})

export class ToastService {
    toasts = [];
    event = new Subject<any>();
    timeouts = [];
    constructor () {}
    exposeEvent() {
        return this.event.asObservable()
    }
    triggerEvent (eventData: any) {
        this.event.next(eventData)
    }

    addToast (toast) {
        toast = {...toast, id: Date.now, timerId: null};
        const timer = setTimeout(() => {
            this.deleteToast({ ...toast, timerId: timer})
        }, 2000)
        this.toasts = [...this.toasts, {...toast, timerId: timer}]
        this.triggerEvent({ type: 'refreshedToasts'});
        this.timeouts.push(timer)
    }

    deleteToast (toastToDelete) {
        this.toasts = this.toasts.filter(toast => toast.id !== toastToDelete.id)
        this.triggerEvent({ type: 'refreshedToasts'});
        this.timeouts = this.timeouts.filter(timer => timer !== toastToDelete.timerId)
    }
}