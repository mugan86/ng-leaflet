import { Component, OnInit } from '@angular/core';
import { appModule } from 'src/app/configurations';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  title = 'angular-leaflet';
  option = 0;
  items = Array(50).fill({
    item: "banana"
  });
  snippet1 = appModule;
  constructor() { }

  ngOnInit(): void {
  }

  selectOption(id: number) {
    this.option = id;
  }

}
