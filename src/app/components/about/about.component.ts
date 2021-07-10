import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  msg: string = 'Najaf is Gay !!';
  showMsg: boolean = false

  ngOnInit(): void {
  }

}
