# So that if we have scrolled the static list and we are close to the bottom , it should add more items ..... 


- we will create a loadmore() function inside the movies.page.ts 


import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  constructor(private movieService: MovieService,private loadingcrl:LoadingController ) { }

  movies: Array<any> = []; 
  imageBaseURl: string = environment.images;
  currentPage: number = 1;

  // Loading functionality ......
#  async loadmovies(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingcrl.create({
      message: 'Loading...',
      spinner: 'bubbles'  // You can choose the loading type you want in your app ...
    })
    // It should start as the app opens
    await loading.present();

      // when calling a function that returns an observable , we need to subscrib to it .. 
    this.movieService.getTopRatedMovies(this.currentPage).subscribe(res => {
      console.log(res.results)
      this.movies = [...this.movies, ...res.results]
      loading.dismiss() // Stops loading when data is successfully fetched
#    event?.target.complete()
# // to disable the event .....
      if (event) {
        event.target.disabled = res.total_pages === this.currentPage
      }
    })


  }

# ....... we get errors here......
  loadmore(event: InfiniteScrollCustomEvent) {
    this.currentPage++
    this.loadmovies(event)
  }
# ..........


  ngOnInit() {
   this.loadmovies()
  }

}



- this function will be called by an ioninfinite event on inside an ion tag in the movies.page.html


# ..................
  <ion-infinite-scroll (ionInfinite)="loadmore($event)">
    <ion-infinite-scroll-content
    loadingSpinner="bubbles"
    loadingText="Loading more data ..."
    >
    </ion-infinite-scroll-content>
  </ion-infinite-scroll>

# ..................












<ion-header>
  <ion-toolbar color="primary">
    <ion-title>movies</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list>
    <ion-item button *ngFor="let movie of movies"> 
      <ion-avatar>
        <img [src]="imageBaseURl + '/w92' + movie.poster_path">
      </ion-avatar>
      <ion-label> {{movie.title}}
        <p>{{movie.release_date | date:'y'}}</p>
      </ion-label>
      <ion-badge slot="end">{{movie.vote_average}}</ion-badge>
    </ion-item>
  </ion-list>

  <ion-infinite-scroll (ionInfinite)="loadmore($event)">
    <ion-infinite-scroll-content
    loadingSpinner="bubbles"
    loadingText="Loading more data ..."
    >
    </ion-infinite-scroll-content>
  </ion-infinite-scroll>


</ion-content>
