# for each item we have to attarch a routing .....  


- routerLink prop is represented as ... 
    #<ion-item [routerLink]="[movie.id]">
    the movie.id is a variable of type number ...



# Details page 
- we inject the current activated route ....to get the id value in the details page .... 

# .......

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

#  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
#    const id = this.route.snapshot.paramMap.get('id')
    console.log(id)
  
  }

}
# .......


# Now we can use this id to get the data from the movieService ....




