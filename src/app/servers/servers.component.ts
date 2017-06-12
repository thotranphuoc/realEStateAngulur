import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',  // selector as element
  // selector: '[app-servers]',    // selector as attribute
  // selector: '.app-servers',     // selector as class
  template: `
    <app-server></app-server>
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
