import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IWork } from "./work";
import { WorkService } from "./works.service";

@Component({
    selector:"work-detail",
    templateUrl: 'work-details.component.html'
    
})

export class WorkDetailComponent implements OnInit{
    
    pageTitle="workerDetails";
    work!:IWork;
    constructor(private route:ActivatedRoute,private router:Router,private workService:WorkService){}
    ngOnInit(): void {
      const id=Number(this.route.snapshot.paramMap.get('id'));
      this.pageTitle +=`: ${id}"`;
      this.getWork(id-1);
  
    }
    onBack(){
      this.router.navigate(['/works']);
    }
    getWork(id:number){
      this.workService.getWoreker().subscribe({
        next:workers=>{ this.work=workers[id]}
      })
    }
}