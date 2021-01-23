import { Injectable } from '@angular/core';
import { HttpMethod } from 'blocking-proxy/built/lib/webdriver_commands';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpMethod) { }

  getUsers(): Observable<User[]> {
    return this.http.get(myApiUrl)
                    .map(res=>res.json())
                    .catch(err=> Observable.throw(err.message));
 } 
}
