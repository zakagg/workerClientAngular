import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IWorker } from '../worker';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-worker-details',
  templateUrl: './worker-details.component.html',
  styleUrls: ['./worker-details.component.css']
})
export class WorkerDetailsComponent implements OnInit{
  pageTitle="workerDetails";
  worker:IWorker|undefined;
  constructor(private route:ActivatedRoute,private router:Router,private workService:WorkerService){}
  ngOnInit(): void {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle +=`: ${id}"`;
    this.getWorker(id-1);

  }
  onBack(){
    this.router.navigate(['/workers']);
  }
  getWorker(id:number){
    this.workService.getWorkers().subscribe({
      next:workers=>{ this.worker=workers[id]}
    })
  }


}
