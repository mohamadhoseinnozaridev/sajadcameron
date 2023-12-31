import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidlastproduct',
  templateUrl: './slidlastproduct.component.html',
  styleUrls: ['./slidlastproduct.component.css'],
})
export class SlidlastproductComponent implements OnInit {
  constructor() {}
  @Input() bigtitle: string = '';
  @Input() Image: string = '';
  @Input() Titel: string = '';
  @Input() discripshion: string = '';

  ngOnInit() {}
}
