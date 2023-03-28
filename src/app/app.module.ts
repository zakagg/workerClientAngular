import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { StarComponent } from './shared/star.component';
import { WorkerListComponent } from './workers/worker-list.component';
import { WorkListComponent } from './works/work-list.component';
import { WorkerDetailsComponent } from './workers/worker-details/worker-details.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './shared/home/welcome.component';
import { WorkerDetailsGuard } from './workers/worker-details/worker-details.guard';
import { WorkDetailComponent } from './works/work-details.component';
import { WorkDetailsGuard } from './works/work-details.guard';
@NgModule({
  declarations: [
    AppComponent,WorkerListComponent,StarComponent,WorkListComponent, WorkerDetailsComponent,
    WorkDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"works",component:WorkListComponent},
      {path :"works/:id",canActivate:[WorkDetailsGuard],component:WorkDetailComponent},
      {path :"workers",component:WorkerListComponent},
      {path :"workers/:id",canActivate:[WorkerDetailsGuard],component:WorkerDetailsComponent},
      {path:"welcom",component:WelcomeComponent},
      {path:"",redirectTo:"welcom",pathMatch:'full'},
      {path:"**",redirectTo:"welcom",pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
