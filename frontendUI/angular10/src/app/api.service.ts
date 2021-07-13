import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly ApiURL = 'http://127.0.0.1:8000/'

  constructor(private http: HttpClient) { }

  getSignup(): Observable<any[]> {
    return this.http.get<any[]>(this.ApiURL + 'login/')
  }

  addUser(val: any) {
    return this.http.post(this.ApiURL + 'signup/', val)
  }
}
