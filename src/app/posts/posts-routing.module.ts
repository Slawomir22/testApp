import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostsResolver } from './posts.resolver';

const routes: Routes = [
	{
		path: '',
		component: PostsComponent,
		resolve: {
			postsData: PostsResolver
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PostsRoutingModule { }
