import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class DataService {

	private messageSource = new BehaviorSubject<string>("default");
	currentMessage = this.messageSource.asObservable();

	construct() { }

	changeMessage(message: string) {
		this.messageSource.next(message)
	}
}