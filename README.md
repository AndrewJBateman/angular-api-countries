# Angular Api Countries

*Angular 8 app that displays details about countries using data from the [Rest Countries](https://restcountries.eu/) API.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Uses the model-view-viewmodel (MVVM) of Angular to bind the remote data that is stored in objects in the application template. The component plays the part of the controller/viewmodel. The template represents the view.

## Screenshots

![Example screenshot](./img/api.png).

## Technologies

* [Angular v8.0.0](https://angular.io/)

* [Angular CLI v8.0.1](https://cli.angular.io/)

* [Angular HttpClient](https://angular.io/guide/http) module used to communicate with back-end services via the XMLHttpRequest browser interface.

* [RxJS Library v6.5.2](https://angular.io/guide/rx-library) used to [subscribe](http://reactivex.io/documentation/operators/subscribe.html) to the API data [observables](http://reactivex.io/documentation/observable.html).

* [Angular Material Design v8.0.0](https://material.angular.io/) used for the user interface, especially [mat-menu](https://material.angular.io/components/menu/overview)[mat-sidenav](https://material.angular.io/components/sidenav/overview), [mat-card](https://material.angular.io/components/card/overview) etc.

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app does automatically reload if you change any of the source files.

## Code Examples

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

## Features

* Angular httpClient used to get data from an API.

* created using latest Angular 7 version with all dependency conflicts resolved.

## Status & To-Do List

* Status: Very basic working app that gets API country data and displays it. Menus not working, search facility needs to be created.

* To-Do: Add Angular material cards, add country data including flag image. Fix menus.

## Inspiration

none

## Contact

Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
