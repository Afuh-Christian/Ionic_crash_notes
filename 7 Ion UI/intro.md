# Here are some things to not .... 

we can add button on some ion tags to make them clickable ....
- the <ion-item> was made clickable ....  

#<ion-header>
  <ion-toolbar color="primary">
    <ion-title>movies</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list>
    <ion-item button *ngFor="let movie of movies"> 
      <ion-label> 
      {{movie.title}}
      </ion-label>
           <p>{{movie.release_date | date:'y'}}</p>
    </ion-item>
  </ion-list>
</ion-content>




- the color properties of some ion tags can be  altered in the   theme/variable.scss    



- Image .... 
    - its src props is in [] 
    #   <img [src]="">


    - NB ..... imageBaseURl and movie are variables while '/w92' is the only raw data .... be carefull not to use `` as you would normally do
    #        <img [src]="imageBaseURl + '/w92' + movie.poster_path">

