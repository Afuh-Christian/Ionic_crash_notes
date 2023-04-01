# As we generate the pages ... new routes are auto generated the app-routing.module.ts 

# So we can alter some  of them .... 
- Like for the detials page ... we should pass an id ... 


# ............':id'..........
const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
#    path: 'movies/:id',
    loadChildren: () => import('./pages/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
];
# ......................



# NB ... In angular routing ordering the routes in the list of routes is very important ... 
- It takes  the first route and goes down ..