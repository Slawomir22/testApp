import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		MenubarModule,
		AppRoutingModule,
		HttpClientModule,

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
