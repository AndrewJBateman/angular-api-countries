import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "angular-api-countries";

  objectKeys = Object.keys;
  public countries: Object;

  constructor(
    private data: DataService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      "thumbs-up",
      sanitizer.bypassSecurityTrustResourceUrl(
        "assets/img/examples/thumbup-icon.svg"
      )
    );
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.data.getCountries().subscribe((res) => {
      this.countries = res;
    });
  }
}
