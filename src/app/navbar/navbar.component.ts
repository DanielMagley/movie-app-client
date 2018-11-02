import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
