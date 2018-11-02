import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  authorization = sessionStorage.getItem('token')
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authorization
    })
  }

  getUsers() {
    let url = 'http://localhost:4000/user'
    return this.http.get(url, this.httpOptions)
  }

  delete(id){
    let url = `http://localhost:4000/user/delete/${id}`
    return this.http.delete(url, this.httpOptions)
  }
} 

