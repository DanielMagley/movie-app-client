import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MAT_DATEPICKER_VALIDATORS } from '../../node_modules/@angular/material';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNTQxMDcyOTI1LCJleHAiOjE1NDExNTkzMjV9.tG93dXhRZm26kdqsc_W1lSkxa-1QYk6Ka8oHglcH95w'
    })
  }

  constructor(private http: HttpClient) { }

  makeList(pictures) {
    // console.log(pictures)
    let url = 'http://localhost:4000/yourlist/new'

    return this.http.post(url, 
  {
    movieImage: pictures
  }, this.httpOptions)
  }
}


