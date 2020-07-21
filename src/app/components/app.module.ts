import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './App/app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {OneMovieComponent} from './OneMovie/one-movie.component';
import {AllMoviesComponent} from './AllMovies/all-movies.component';
import {MovieResolveService} from '../Services/movie-resolve.service';
import {OneMovieResolveService} from '../Services/one-movie-resolve.service';

const routes: Routes = [
  {path: '', component: AllMoviesComponent, resolve: {movies: MovieResolveService}},
  {
    path: 'onemovie/:id', component: OneMovieComponent, resolve: {movie: OneMovieResolveService}
    ,
    children: [
      {path: '', component: AllMoviesComponent, resolve: {movies: MovieResolveService}}
    ]
  }

];


@NgModule({
  declarations: [
    AppComponent,
    OneMovieComponent,
    AllMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
