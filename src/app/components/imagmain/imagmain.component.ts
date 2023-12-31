import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagmain',
  templateUrl: './imagmain.component.html',
  styleUrls: ['./imagmain.component.css'],
})
export class ImagmainComponent implements OnInit {
  constructor() {}

  @Input() Image: string = '';

  ngOnInit() {}
}
