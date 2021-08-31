import { responseI } from './../../../models/usuarios/response.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url:string = "https://reqres.in/"

  constructor(private http: HttpClient) { }

  getUsuarios(page:number):
  Observable<responseI>{

    let dir = this.url + `api/users?page=${page}`
    return this.http.get<responseI>(dir)

  }

}
