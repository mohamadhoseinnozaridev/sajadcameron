import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prouductnew',
  templateUrl: './prouductnew.component.html',
  styleUrls: ['./prouductnew.component.css'],
})
export class ProuductnewComponent implements OnInit {
  constructor() {}
  @Input() Image: string = '';
  @Input() Title: string = '';
  @Input() PriceDescripiton: string = '';
  ngOnInit() {}
}
