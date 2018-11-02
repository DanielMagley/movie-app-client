import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
 returns;
  constructor(
    private service: PageService 
  ) { }

  ngOnInit() {
    this.service.getList().subscribe(data => {
      this.returns = data;
    })
  }

  deleteItem(id){
    this.service.delete(id).subscribe(data => {
      console.log(data)
    })
  }

  updateItem(id, image) {
    this.service.update(id, image).subscribe(data => {
      console.log(data)
    })
  }

} 
