import { Component } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie-service';
// above and bellow adding imports for Ionic Cards
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  movies:any[]=[];
  constructor(private service:MovieService) {

  }
//using this.service.GetMovieData with .subscribe makes the app asyncronous
  ionViewWillEnter(){
    this.service.GetMovieData().subscribe(
      (data)=>{
        this.movies = data.Search;
        console.log(this.movies);
      }
    );
  }

}
