import { Component } from '@angular/core';
import { ServiceCubos } from '../services/service.cubos';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public marcas!: Array<string>;
  constructor(private _service:ServiceCubos){}

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this._service.getMarcas().subscribe(response=>{
      this.marcas = response; 
    })
  }
}
