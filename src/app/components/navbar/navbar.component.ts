import { NavBarOption } from './navBar.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SideNavToggle } from './interfaceNavBar';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {


  constructor() { }

  listOptions: NavBarOption[] = [
    new NavBarOption("Dashboard", "home","homepage"),
    new NavBarOption("Funcionários", "group","funcionarios"),
    new NavBarOption("Configurações", "settings_suggest","configuracoes")
  ];

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter;
  collapsed = false;
  screenWidht = 0;
  ngOnInit(): void {
    this.screenWidht = window.innerWidth;
  }


  changeCollapsed(): void{
this.collapsed = !this.collapsed;
this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidht: this.screenWidht})
  }


}
