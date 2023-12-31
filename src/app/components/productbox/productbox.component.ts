import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productbox',
  templateUrl: './productbox.component.html',
  styleUrls: ['./productbox.component.css'],
})
export class ProductboxComponent implements OnInit {
  constructor() {}
  @Input() Image: string = '';
  @Input() Title: string = '';
  @Input() PriceDescripiton: string = '';
  ngOnInit() {}
}
