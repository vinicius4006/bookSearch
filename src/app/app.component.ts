import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'bookSearch-app';


  // @Input() collapsed = false;
  // @Input() screenWidth = 0;


  // getBodyClass(): string{
  //   let styleClass='';
  //   if(this.collapsed && this.screenWidth > 768){
  //     styleClass = 'body-trimmed';
  //   } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
  //     styleClass = 'body-md-screen'
  //   }
  //   return '';
  // }

}
