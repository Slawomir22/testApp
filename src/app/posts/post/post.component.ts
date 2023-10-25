import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.css']
})
export class PostComponent {


	route = inject(ActivatedRoute);
	postsService = inject(PostsService)
	post$: Observable<Post> = this.route.paramMap.pipe(
		map(param => Number(param.get('id'))),
		switchMap(id => this.postsService.getPost(id))
	)

}
