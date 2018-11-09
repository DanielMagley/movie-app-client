import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
data;
details;
array;
ids;
firsts;
lasts;
mails;
  constructor(private service: SettingsService) { }

  ngOnInit() {

      this.details = this.service.myDetails()
      .subscribe(infos => {
        this.array = infos
        console.log(this.array)
         this.ids = this.array.id;
         this.firsts = this.array.firstName;
        this.lasts = this.array.lastName;
        this.mails = this.array.userEmail;
      })
    
  } 

  settingsForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit() {
    let datas = this.settingsForm.value
    let first = datas.firstName
    let last = datas.lastName
    let emails = datas.email
    let pass = datas.password
    console.log(first, last, emails, pass)
    this.data = this.service.getData(first, last, emails, pass)
    .subscribe(info => {
      console.log(info)
      window.location.href = "/settings"
    })
  }

}
