import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
	items!: MenuItem[];

	ngOnInit() {
		this.items = [
			{
				label: 'Home',
				icon: 'pi pi-fw pi-home',
				routerLink: "/home"
			},
			{
				label: 'Posts',
				icon: 'pi pi-fw pi-list',
				routerLink: "/posts"
			},

		];
	}

}
