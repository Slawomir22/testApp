import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { TableModule } from 'primeng/table';
import { PostsRoutingModule } from './posts-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PostComponent } from './post/post.component';
import { CardModule } from 'primeng/card';


@NgModule({
	declarations: [
		PostsComponent,
		PostComponent,

	],
	imports: [
		CommonModule,
		PostsRoutingModule,
		TableModule,
		ButtonModule,
		InputTextModule,
		CardModule
	]
})
export class PostsModule { }
