import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-leaflet-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  @Input() primary!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
