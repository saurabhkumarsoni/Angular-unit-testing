import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  saveDetails(studentInfo: any){
    return this.http.post('https://dummyjson.com/products/add', studentInfo)
  }
}
