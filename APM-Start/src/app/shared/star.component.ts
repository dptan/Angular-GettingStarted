import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
    ngOnInit(): void {
        this.starWidth = this.rating * 75/5;
    }//} OnChanges {
    //ngOnChanges(): void {
     //   this.starWidth = this.rating * 75/5;
    //}

    @Input() rating: number = 4;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}