import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() public title:any;
  tipoNombres = [
    ["bi-search","",true,""],
    ["bi-person","/auth/login",false,"#exampleModal"],
    ["bi-handbag","",false,""]
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
