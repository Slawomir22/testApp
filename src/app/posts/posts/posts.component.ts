import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { PostsService } from 'src/app/services/posts.service';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.css']
})
export class PostsComponent {
	posts$ = this.postsService.getAllPosts();
	constructor(private postsService: PostsService) { }


	clear(table: Table) {
		table.clear();
	}

}
