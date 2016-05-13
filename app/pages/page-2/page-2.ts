import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the Page2Page page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/page-2/page-2.html',
})
export class Page2 {
  
  onPageDidEnter() {
    alert("onPageDidEnter() called for page2")
  }
  
  onPageWillEnter() {
    alert("onPageWillEnter() called for page2")
  }
  
  constructor(public nav: NavController) {}
}
