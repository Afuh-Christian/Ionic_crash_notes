# this is provided by ionic ....

we will inject it into the component that wishes to apply it ....



# movies/movies.page.ts 

import { Component, OnInit } from '@angular/core';
# import { LoadingController } from '@ionic/angular';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  constructor(private movieService: MovieService,
#  private loadingcrl:LoadingController ) { }

  movies: Array<any> = []

#  // Loading functionality ......
  async loadmovies() {
    const loading = await this.loadingcrl.create({
      message: 'Loading...',
      spinner: 'bubbles'  // You can choose the loading type you want in your app ...
    })
    // It should start as the app opens
    await loading.present();

      // when calling a function that returns an observable , we need to subscrib to it .. 
    this.movieService.getTopRatedMovies().subscribe(res => {
      console.log(res.results)
      this.movies = res.results
      loading.dismiss() // Stops loading when data is successfully fetched
    })
  
  }

# ........end loading ...


 
  ngOnInit() {
   this.loadmovies()
  }

}



# How the loading works .... 

- When the function called in the onint ... 
- it starts loading 
- the loading stops after data is  successfully fetched ...













