import { Injectable , Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, filter,map } from 'rxjs/operators';
import { IStudents } from '../models/student';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user$ : BehaviorSubject<IUser[]> = new BehaviorSubject([]);

  private _url: string = '/assets/data/users/user-data.json';

  getListOfUsers(): Observable<IUser[]>{
    //return this._http.get<IStudents[]>(this._url);
    this._http.get<IUser[]>(this._url).subscribe((data: IUser[])=>{
      this.user$.next(data);
    });
    return this.user$;
  }

  constructor(private _http : HttpClient) { }
}
