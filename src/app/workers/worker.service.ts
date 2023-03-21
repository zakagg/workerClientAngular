import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable,catchError,tap, throwError } from "rxjs";
import { IWorker } from "./worker";

@Injectable({
    providedIn:'root'
})

export class WorkerService{
    private url='api/workers/workers.json';
    constructor(private http:HttpClient ){}
    //private workers:Observable<IWorker[]>=this.http.get<IWorker[]>(this.url);
    /*[{
        "workerId": 1,
        "job":"sdqsdsqdsqd",
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
        "job":"qdqsdqsdqsd",
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
    */

    getWorkers():Observable<IWorker[]>{
        return this.http.get<IWorker[]>(this.url).pipe(tap(data=>data),catchError(this.handleError));
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
      }
}