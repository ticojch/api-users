import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly API_URL = "https://trabajadores-2e634-default-rtdb.europe-west1.firebasedatabase.app/";
  users: any[];

  constructor(private http:HttpClient) { 
    this.users = [];
  }

  getData(){
    return this.http.get<any[]>(this.API_URL+'.json');
  }

  getUser(id:number){
    return this.http.get<any>(`${this.API_URL}/${id}.json`);
  }
}
