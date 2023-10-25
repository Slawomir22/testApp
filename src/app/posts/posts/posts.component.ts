import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Table } from 'primeng/table';


@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.css']
})
export class PostsComponent {
	private allPosts = inject(ActivatedRoute).snapshot.data['postsData'];


	get posts() {
		return this.allPosts;
	}


	clear(table: Table) {
		table.clear();
	}

}
