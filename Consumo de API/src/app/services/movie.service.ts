import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

export enum SearchType{
  all='',
  movie = 'movie',
  serie = 'serie',
  episode = 'episode'
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //URL donde la API llamara
  url = 'http://www.omdbapi.com/';
  apiKey = '14f2a50b';
  
  constructor(private http:HttpClient) { }

  //MÉTODO PARA LA BUSQUEDA DE TITULO
  searchByTitle(title: string, type: SearchType):Observable<any>{
    //Hacemos la llamada
    return this.http.get(`${this.url}?apiKey=${this.apiKey}&s=${encodeURI(title)}&type=${type}`
    ).pipe(map(data => data ['Search']));
  }

  //METODO DETALLES PELICULA
  searchById(id:string):Observable<any>{
    return this.http.get(`${this.url}?apiKey=${this.apiKey}&i=${id}&plot=full`);
  }
}
