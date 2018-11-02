import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) { }
  authorization = sessionStorage.getItem('token')
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authorization
    })
  }
  
  
  getList(){
    console.log('This is a test')
    let url = 'http://localhost:4000/yourlist/getmine'
    return this.http.get(url, this.httpOptions)
    
  }

  delete(id){
    let url = `http://localhost:4000/yourlist/delete/${id}`
    return this.http.delete(url, this.httpOptions)
  }

  update(id, image) {
    let url = `http://localhost:4000/yourlist/update/${id}`
    return this.http.put(url, 
    {
      movieImage: image,
      isWatched: true
    },
  this.httpOptions)
  }
}
