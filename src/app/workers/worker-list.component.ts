import { Component, OnChanges, SimpleChanges } from "@angular/core";
import { WorkerService } from "./woker.service";
import { IWorker } from "./worker";

@Component({
    selector:"worker-list",
    templateUrl:"./worker-list.component.html",
    styleUrls:['./worker-list.component.css']

})
export class WorkerListComponent implements OnChanges{
    constructor(private workerService:WorkerService){
        
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log("onChange")
    }
    pageTitle="Worker liste";
    imageWidth=30
    imageMargin=10;
    showImage=true;
    ratingClicked!:number;
    private _listFilter:string="";
    get listFilter():string{
        return this._listFilter
    }
    set listFilter(value:string){
        console.log(value)
        this._listFilter=value;
        this.onworkerFilter();
    }

    
    workers:IWorker[]= this.workerService.getWorkers();
    workerFilter:IWorker[]=this.workers;

    toggleImage(){
        this.showImage=!this.showImage
    }
    onworkerFilter():IWorker[]{
        this.workerFilter.filter((worker:IWorker)=>
        worker.job.toLowerCase().includes(this._listFilter))
        return this.workerFilter;
    }
    OnratingClicked(message:string){
        
        this.pageTitle=message;
    }


}