# Import the httpclientModule in the appmodule and place in the provider of the app ... before we  can use in the project .....



# 1.........  app/app.module.ts

# import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
# . ..............
  providers: [{ provide: RouteReuseStrategy, useClass: 
  IonicRouteStrategy } ,
# HttpClientModule],
  bootstrap: [AppComponent],
# . ..............
})
export class AppModule {}

# Crreate an account on this website and get the apiKey and use ... 
https://www.themoviedb.org/settings/api

# 2 ............. environments/environments.ts

- we can set .env like variables here .... 

export const environment = {
  production: false, 
  apiKey: '4e342a04decb4f61ed0601312a9de14c', 
  baseURL: 'https://api.themoviedb.org/3', 
  images: 'https://image.tmdb.org/t/p'
};



# 3 ........... services/movie.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }
  getTopRatedMovies(page=1): Observable<any>{
    return this.http.get(`${environment.baseURL}/movie/popular?api_key=${environment.apiKey}&page=${page}`)
  }
 
}


 # - we included pagination .... page=1
   # getTopRatedMovies(page=1): Observable<any>{
    return this.http.get(`${environment.baseURL}/movie/popular?api_key=${environment.apiKey}&page=${page}`)
  }
