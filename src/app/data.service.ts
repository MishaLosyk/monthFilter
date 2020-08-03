import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

   }

   getUsers(): Observable<User[]> {
      return this.http.get<User[]>('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      .pipe(map(a=>{

        return a.map(it=>{
          it.dob = new Date(it.dob).getMonth();
          return it;
        });

      }));
   }


}
