import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { WorkerService } from "./worker.service";
import { IWorker } from "./worker";

@Component({
    selector:"worker-list",
    templateUrl:"./worker-list.component.html",
    styleUrls:['./worker-list.component.css']

})
export class WorkerListComponent implements OnChanges ,OnInit{
    constructor(private workerService:WorkerService){
        
    }
    
    errorMessage:string=""
    pageTitle="Worker liste";
    imageWidth=30
    imageMargin=10;
    showImage=true;
    private _listFilter:string="";
    get listFilter():string{
        return this._listFilter
    }
    set listFilter(value:string){
        console.log(value)
        this._listFilter=value;
        this.onworkerFilter();
    }

    
    workers:IWorker[]= []
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
    ngOnChanges(changes: SimpleChanges): void {
        console.log("onChange")
    }
    ngOnInit(): void {
        this.workerService.getWorkers().subscribe({
            next: workers=> {
                this.workers=workers
                this.workerFilter=workers
            },
            error:err=>this.errorMessage=err
        });
    }
}