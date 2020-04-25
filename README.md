# :zap: Angular Api Countries

* Angular 9 app that displays details about countries using data from the [Rest Countries](https://restcountries.eu/) API. To be developed into a different API data app

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [:zap: Angular Api Countries](#zap-angular-api-countries)
  * [:page_facing_up: Table of contents](#pagefacingup-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signalstrength-technologies)
  * [:floppy_disk: Setup](#floppydisk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Uses the model-view-viewmodel (MVVM) of Angular to bind the remote data that is stored in objects in the application template. The component plays the part of the controller/viewmodel. The template represents the view.

## :camera: Screenshots

![Example screenshot](./img/api.png).

## :signal_strength: Technologies

* [Angular v9](https://angular.io/)
* [Angular HttpClient](https://angular.io/guide/http) module used to communicate with back-end services via the XMLHttpRequest browser interface.
* [RxJS Library v6](https://angular.io/guide/rx-library) used to [subscribe](http://reactivex.io/documentation/operators/subscribe.html) to the API data [observables](http://reactivex.io/documentation/observable.html).
* [Angular Material Design v9](https://material.angular.io/) used for the user interface, especially [mat-menu](https://material.angular.io/components/menu/overview)[mat-sidenav](https://material.angular.io/components/sidenav/overview), [mat-card](https://material.angular.io/components/card/overview) etc.

## :floppy_disk: Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app does automatically reload if you change any of the source files.

## :computer: Code Examples

* `data.service.ts` to get country data using Angular httpClient module.

```typescript

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

```

## :cool: Features

* Angular httpClient used to get data from an API.
* Updated to latest Angular 9 version with all dependency conflicts resolved.

## :clipboard: Status & To-Do List

* Status: Very basic working app that gets API country data and displays it. Menus not working, search facility needs to be created.
* To-Do: Add Angular material cards, add country data including flag image. Fix menus. Use for a new app with different API data

## :clap: Inspiration

none

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
