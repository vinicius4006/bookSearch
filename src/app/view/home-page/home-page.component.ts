import { SideNavToggle } from './../../components/navbar/interfaceNavBar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  isSideNavCollapsed = false;
  screenWidth = 0;


  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidht;
    this.isSideNavCollapsed = data.collapsed;
  }



}
