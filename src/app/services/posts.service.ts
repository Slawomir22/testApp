import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
	providedIn: 'root'
})
export class PostsService {

	constructor(private http: HttpClient) { }

	api_Url = "https://jsonplaceholder.typicode.com/posts";

	getAllPosts(): Observable<Post[]> {
		return this.http.get<Post[]>(this.api_Url)
	}
}
