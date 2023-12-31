import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productall',
  templateUrl: './productall.component.html',
  styleUrls: ['./productall.component.css'],
})
export class ProductallComponent implements OnInit {
  constructor() {}
  @Input() Image: string = '';
  @Input() Title: string = '';
  @Input() PriceDescripiton: string = '';
  ngOnInit() {}
}
