import{Component, EventEmitter, Input, OnChanges, OnInit, Output} from "@angular/core"
@Component({selector:"star",
            templateUrl:"star.component.html",
            styleUrls:["star.component.css"]})
export class StarComponent implements OnChanges{
    
    cropWidth:number=75
    @Input() rating!: number;
    @Output() ratingClicked:EventEmitter<string> =new EventEmitter<string>;

    ngOnChanges():void{
        this.cropWidth=this.rating*75/5
    }
    onClick(): void{
        this.ratingClicked.emit(`the rating ${this.rating } was afilidated`)
    }
}