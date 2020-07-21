import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  movies: any;

  constructor(private httpClient: HttpClient) {
     this.httpClient.get('https://www.themoviedb.org/documentation/api//discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22').subscribe(value => console.log(value));


     ////discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22
  }
}
