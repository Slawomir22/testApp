import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostsResolver } from './posts.resolver';
import { PostComponent } from './post/post.component';

const routes: Routes = [
	{
		path: '',
		component: PostsComponent,
		resolve: {
			postsData: PostsResolver
		}
	},
	{
		path: ":id",
		component: PostComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PostsRoutingModule { }
