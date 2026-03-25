import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//importing httpcline and observable to make the app work as a web app

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  constructor(private httpClient:HttpClient ){

  }
// getting json data through GetMovieData method
  GetMovieData():Observable<any>{
    return this.httpClient.get('https://www.omdbapi.com/?apikey=2ee2ed84&s=%27war%27')
  }

}
