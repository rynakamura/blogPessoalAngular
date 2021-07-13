import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';


@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization',environment.token)
  }
  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization',environment.token)
    }
  }

  getAllTemas(): Observable<Tema[]>{
    return this.http.get<Tema[]>('http://localhost:8080/temas',this.token)
  }

  getByIdTema(id:number):Observable<Tema>{
    return this.http.get<Tema>(`http://localhost:8080/temas/${id}`, this.token)
  }

  cadastrar(tema:Tema):Observable<Tema>{
    return this.http.post<Tema>('http://localhost:8080/temas',tema,this.token)
  }

  alterar(tema:Tema):Observable<Tema>{
    return this.http.put<Tema>('http://localhost:8080/temas',tema,this.token)
  }

  deletar(id:number){
    return this.http.delete(`http://localhost:8080/temas/${id}`,this.token)
  }

}