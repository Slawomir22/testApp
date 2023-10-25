import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './loader/loader.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		HomeComponent,
		LoaderComponent

	],
	imports: [
		BrowserModule,
		MenubarModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		ProgressSpinnerModule


	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
