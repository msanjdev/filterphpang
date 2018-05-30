import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {DataSource} from '@angular/cdk/collections';
import { ServerListService } from '../services/server-list.service';
import { ServerData } from '../classes/server-data';
import { FilterData } from '../classes/filter-data';


@Component({
  selector: 'server-table',
  templateUrl: './server-table.component.html',
  styleUrls: ['./server-table.component.css']
})
export class ServerTableComponent implements OnInit {
  dataSource = new ServerDataSource(this.serverService, new FilterData());
  displayedColumns = ['model', 'ram', 'hdd', 'location', 'price'];
  constructor(private serverService: ServerListService ) { }
  
  ngOnInit() {
  }

  applyFilter(filter: FilterData) {

    console.log('applying filter')
    //this.dataSource.filter = filter
    //this.dataSource.disconnect()
    //this.dataSource.connect()

    this.serverService.getServers(filter).subscribe((res) => {
      this.dataSource = new ServerDataSource(this.serverService, filter);
      //super.changeDetectorRefs.detectChanges();
    });
  
  }
}

export class ServerDataSource extends DataSource<any> {

  constructor(private serverService: ServerListService, private filter: FilterData) {
    super();
  }

  connect(): Observable<ServerData[]> {
    return this.serverService.getServers(this.filter);
  }

  disconnect() {}
}