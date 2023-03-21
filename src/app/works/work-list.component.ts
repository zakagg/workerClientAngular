import { Component } from "@angular/core";

@Component({selector:"work-list",
            templateUrl:"work-list.component.html",
            styleUrls:["work-list.component.css"]})
export class WorkListComponent{

private _searchedWork:string=""
get searchedWork(){
    
    return this._searchedWork
}
set searchedWork(value:string){
    
    this._searchedWork=value;
}

}