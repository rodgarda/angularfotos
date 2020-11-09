import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor(private  http:HttpClient) {}
    getphotos(){
      return this.http.get<Photo[]>("http://jsonplaceholder.typicode.com/photos?_limit=6");
    }
}
