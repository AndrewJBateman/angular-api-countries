import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	result: any;

	constructor(private http: HttpClient) { }

	// function to get info for all countries
	getCountries() {
		return this.http
			.get('https://restcountries.eu/rest/v2/all')
			.pipe(map(
				result => this.result = result
			));
	}

}





