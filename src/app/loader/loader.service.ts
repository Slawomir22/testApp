import { Injectable, inject } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoaderService {


	private router = inject(Router);
	private _isBeingLoaded = new BehaviorSubject<boolean>(false);

	get isBeingLoaded() {
		return this._isBeingLoaded.asObservable();
	}

	constructor() {
		this.eventHandling(this.router.events as unknown as Observable<Event>);
	}


	private eventHandling(event: Observable<Event>) {
		event.subscribe((event) => {
			if (event instanceof NavigationStart) {

				this._isBeingLoaded.next(true);

			} else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {

				this._isBeingLoaded.next(false);
			}
		})
	}
}
