import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../../Models/Movie';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  movies: Movie[];

  constructor(private httpClient: HttpClient, private router: Router) {
    // this.httpClient.get('https://api.themoviedb.org/3/movie/top_rated?api_key=aad0303caca77fd4942b88b9502101e3&language=en-US&page=1')
    //   .subscribe(value => console.log(this.movies = value.results));
    // console.log(this.movies);
  }

  ////https://api.themoviedb.org/3/movie/top_rated?api_key=aad0303caca77fd4942b88b9502101e3&language=en-US&page=1

}


