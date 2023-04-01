import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-actionsheetpg',
  templateUrl: './actionsheetpg.page.html',
  styleUrls: ['./actionsheetpg.page.scss'],
})
export class ActionsheetpgPage implements OnInit {

  constructor(public actionSheetCtrl: ActionSheetController) { }

  async presentActionSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Christian ActionSheet', // name of the the Sheet
      buttons: [
        {
          text: 'Delete', 
          role: 'destructive', // To delete something .... has a destructive role ... not close , ... it also affects the styling of the button 
          icon: 'trash', // gives a icon 
          handler : () => { console.log('Delete clicked')}   // The function called when the action is performed .... 
        },
        {
          text: 'Play', 
          handler: () => {console.log("Play Clicked")}
        }, 
        {
          text: 'Share', 
          icon: 'share', 
          handler : () => {console.log('Share Clicked')}
        }, 
        { // The cancel btn is separated from the others .... 
          text: 'Cancel', 
          icon: 'close',
          role: 'cancel', 
          handler: () => {console.log("Cancle clicked")}
        }, 
      ], 
      cssClass: 'custom-css', // to use custom-css as a class in the scss fill to do custom styling 
      animated: true, 
      backdropDismiss: true, // click overlay to dismiss  .... // Also when you click backdrop it performs thesame functions and the role cancel .... so the handler we assigned manually will be called ...
      keyboardClose: false, 
      mode: 'ios'  // ios = for apple style .... md = for android styles 
    })

    actionSheet.present();
  }

  ngOnInit() {
  }

}
