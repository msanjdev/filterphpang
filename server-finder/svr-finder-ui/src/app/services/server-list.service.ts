
import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import { User } from '../classes/user.model';
import { ServerData } from '../classes/server-data';
import { FilterData } from '../classes/filter-data';

@Injectable({
  providedIn: 'root'
})
export class ServerListService {

  private serviceUrl = 'http://localhost:8000/api/servers/filter/'
  //private serviceUrl = 'assets/jsondata/serverdata.json' //'https://raw.githubusercontent.com/msanjdev/demo/master/db.json';
  
  constructor(private http: HttpClient) { }
  
  getServers(filter:FilterData): Observable<ServerData[]> {
    let p = filter.getAsParameter()
    console.log(p)
    return this.http.get<ServerData[]>(this.serviceUrl + p);
  }
}
