import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  //Voy a recoger todos los datos
  item:any;

  constructor(private activatedRoute: ActivatedRoute,
              private movieService:MovieService) { }

  ngOnInit() {
    //Recoger el id de la ruta
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    //llamada
    this.movieService.searchById(id).subscribe(
      data => this.item = data
      
    );


  }

  openWebsite(){
    window.open(this.item.Website, '_blank');
  }

}
