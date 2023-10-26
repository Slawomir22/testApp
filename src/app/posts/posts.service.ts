import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, throwError } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
	providedIn: 'root'
})
export class PostsService {

	constructor(private http: HttpClient) { }

	api_Url = "https://jsonplaceholder.typicode.com/posts/";

	getAllPosts(): Observable<Post[]> {
		return this.http.get<Post[]>(this.api_Url).pipe(
			delay(1000),  // operator delay is used to show loader clearly
			catchError(this.handlingError)
		);
	}

	getPost(id: number) {
		return this.http.get<Post>(this.api_Url + id).pipe(
			catchError(this.handlingError)
		);
	}


	handlingError(error: HttpErrorResponse) {
		let errorMsg = '';
		if (error.error instanceof ErrorEvent) {
			errorMsg = `Error: ${error.error.message}`;
		} else {
			errorMsg = `Error Code: ${error.status} - message : ${error.message}`;
		}
		window.alert(errorMsg);
		return throwError(() => new Error(errorMsg));
	}

}
