import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType, MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results:Observable<any>;
  searchTerm:string='';
  type:SearchType = SearchType.all;

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.searchChanged();
  }

  searchChanged(){
    this.results = this.movieService.searchByTitle(this.searchTerm, this.type);
    //this.results = this.movieService.searchByTitle("matrix", SearchType.all);
  }

}
