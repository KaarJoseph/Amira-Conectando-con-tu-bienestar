import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../domain/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'API-URL';
  private loggedInStatus = false;
  private currentUser: Usuario | null = null;

  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(`${this.apiUrl}login/`, {username, password}, {headers});
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}usuarios/${id}/`);
  }

  getEstadisticas(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}estadisticas/`);
  }

  setLoggedIn(value: boolean, user: Usuario | null) {
    this.loggedInStatus = value;
    this.currentUser = user;
  }

  isLoggedIn(): boolean {
    return this.loggedInStatus;
  }

  getCurrentUser(): Usuario | null {
    return this.currentUser;
  }

  logout() {
    this.loggedInStatus = false;
    this.currentUser = null;
  }
}
