import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { Post } from '../interfaces/post';

@Injectable({
	providedIn: 'root'
})
export class PostsResolver {
	constructor(private postsService: PostsService) { }
	resolve(): Observable<Post[]> {
		return this.postsService.getAllPosts();
	}
}
