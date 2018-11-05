import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
 toggle;
  ngOnInit() {
    if(sessionStorage.getItem('token')) {
      this.toggle = true;
    } else {
      this.toggle = false
    }
  }

  logout(){
    sessionStorage.clear()
    window.location.href = "/";
  }

  adminPage() {
    if(sessionStorage.getItem('isAdmin') === 'true') {
      window.location.href = "/admin";
    } else {
      window.location.href = "/";
    }
  }

} 
