import { Component, OnInit } from "@angular/core";
import { IWork } from "./work";
import { WorkService } from "./works.service";

@Component({selector:"work-list",
            templateUrl:"work-list.component.html",
            styleUrls:["work-list.component.css"]})
export class WorkListComponent implements OnInit{
    constructor(private workService:WorkService){}

private _workFilter:string=""
errorMessage:string="" ;
listWorks:IWork[]=[]
listeFilterWork:IWork[]=this.listWorks;
showImage=false;
imageWidth:number=25;
imageMargin:number=5;


get workFilter(){
    
    return this._workFilter
}
set workFilter(value:string){
    
   
    this.listeFilterWork=this.searchedWorkFromString(value)
}
ngOnInit(){
    this.workService.getWoreker().subscribe({
        next:works=>{
            
            this.listWorks=works;
            this.listeFilterWork=works;
            },
        error:err=>this.errorMessage=err
    });
}
toggleImage(){
    this.showImage=!this.showImage
}
searchedWorkFromString(value:string){ 
    value=value.toLowerCase(); 
   return this.listWorks.filter((works:IWork)=>
   works.name.toLowerCase().includes(value))
   
   

}
}