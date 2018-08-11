import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {

  private url: string = 'https://reqres.in';

  constructor(public http: HttpClient) {
  }

  loginUser(input){
    return this.http.post(this.url+'/api/login', input);
  }

  getUsers(){
    return this.http.get(this.url+'/users');
  }

  addUser(input){
    return this.http.post(this.url+"/users", JSON.stringify(input));
  }

  updateUser(input){
    return this.http.put(this.url+"/users/"+input.id, JSON.stringify(input));
  }

}
