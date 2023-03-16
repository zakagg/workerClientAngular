import { Component } from "@angular/core";
import { IWorker } from "./worker";

@Component({
    selector:"worker-list",
    templateUrl:"./worker-list.component.html",
    styleUrls:['./worker-list.component.css']

})
export class WorkerListComponent{
    pageTitle="Worker liste";
    imageWidth=30
    imageMargin=10;
    workers:IWorker[]= [{
        "workerId": 1,
        "workerName": "Leaf Rake",
        "workerSurName": "Leaf Rake",
        "workerCode": "GDN-0011",
        "releaseDate": "March 19, 2021",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/leaf_rake.png"
      },
      {
        "workerId": 10,
        "workerName": "Video Game Controller",
        "workerSurName": "Video Game Controller",
        "workerCode": "GMG-0042",
        "releaseDate": "October 15, 2020",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "assets/images/xbox-controller.png"
      }
    ]
}