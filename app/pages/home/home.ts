import {Page, ActionSheet, NavController} from 'ionic-angular';

import {Page2} from "../../pages/page-2/page-2";

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private nav: NavController) {

  }

  public open(): void {
    let sheet = ActionSheet.create({
      title: 'Modify your album',
      buttons: [ 
        {
          text: 'Push Page2',
          handler: () => {
            sheet.dismiss().then(() => {
              this.nav.push(Page2)
            })
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    })
    
    this.nav.present(sheet);
  }

}
