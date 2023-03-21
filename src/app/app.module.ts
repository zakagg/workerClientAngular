import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { StarComponent } from './shared/star.component';
import { WorkerListComponent } from './workers/worker-list.component';
import { WorkListComponent } from './works/work-list.component';
@NgModule({
  declarations: [
    AppComponent,WorkerListComponent,StarComponent,WorkListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
