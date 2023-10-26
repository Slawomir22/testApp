import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../interfaces/post';
import { PostsService } from './posts.service';

@Injectable({
	providedIn: 'root'
})
export class PostsResolver {
	constructor(private postsService: PostsService) { }
	resolve(): Observable<Post[]> {
		return this.postsService.getAllPosts();
	}
}
