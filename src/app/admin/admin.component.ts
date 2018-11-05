import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { AdminService } from '../admin.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
users;
data;
  constructor(
    private service: AdminService
  ) { }

  ngOnInit() {
    this.service.getUsers().subscribe(data => {
      console.log(data)
      this.users = data;
    })
  }

  adminForm = new FormGroup({
    userID: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit() {
    let datas = this.adminForm.value
    let userid = datas.userID 
    let first = datas.firstName
    let last = datas.lastName
    let emails = datas.email
    let pass = datas.password
    this.data = this.service.getData(userid,first, last, emails, pass)
    .subscribe(info => {
      console.log(info)
      window.location.href = "/admin"
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

