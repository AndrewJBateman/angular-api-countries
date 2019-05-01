import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular-api-countries';

	objectKeys = Object.keys;
	countries: any;

	constructor(private data: DataService) { }

	// tslint:disable-next-line: use-life-cycle-interface
	ngOnInit() {
		this.data.getCountries().subscribe(res => {
			this.countries = res;
			console.log(this.countries[0].name);
		});
	}
}


