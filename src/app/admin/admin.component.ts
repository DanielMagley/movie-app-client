import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
users;
  constructor(
    private service: AdminService
  ) { }

  ngOnInit() {
    this.service.getUsers().subscribe(data => {
      console.log(data)
      this.users = data;
    })
  }

  deleteUser(id){
    console.log(id)
    this.service.delete(id).subscribe(data => {
      console.log(data)
      window.location.href = "/admin";
    })
  }

}
