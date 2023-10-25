import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { TableModule } from 'primeng/table';
import { PostsRoutingModule } from './posts-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
	declarations: [
		PostsComponent
	],
	imports: [
		CommonModule,
		PostsRoutingModule,
		TableModule,
		ButtonModule,
		InputNumberModule,
		InputTextModule
	]
})
export class PostsModule { }
