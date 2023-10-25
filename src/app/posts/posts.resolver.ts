import { Injectable } from '@angular/core';
import {
	RouterStateSnapshot,
	ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { Post } from '../interfaces/post';

@Injectable({
	providedIn: 'root'
})
export class PostsResolver {
	constructor(private postsService: PostsService) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
		console.log(' resolver works')
		return this.postsService.getAllPosts();
	}
}
