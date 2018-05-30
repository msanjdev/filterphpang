import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

import { MatMenuModule, MatButtonModule, MatIconModule, 
  MatCardModule, MatSidenavModule, MatOption, MatOptionModule, MatSelectModule, MatSliderModule  } 
  from '@angular/material';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import {MatSelectionList, MatListOption, MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { FinderFilterComponent } from './finder-filter/finder-filter.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ServerListService } from './services/server-list.service';
import { ServerTableComponent } from './server-table/server-table.component';
import { CheckboxListComponent } from './components/checkbox-list/checkbox-list.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    FinderFilterComponent,
    FilterFormComponent,
    ServerTableComponent,
    CheckboxListComponent,
    

  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, 
    MatSidenavModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    MatSliderModule,

    HttpClientModule,
    MatTableModule
  ],
  providers: [ ServerListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
