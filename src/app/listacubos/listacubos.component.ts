import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cubo } from 'src/models/Cubo';
import { ServiceCubos } from '../services/service.cubos';

@Component({
  selector: 'app-listacubos',
  templateUrl: './listacubos.component.html',
  styleUrls: ['./listacubos.component.css']
})
export class ListacubosComponent implements OnInit {
  public cubos!: Array<Cubo>;

  constructor(private _service:ServiceCubos, private _activeRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params:Params)=>{
      var idMarca = params['idMarca'];
      this.loadDataAlumnos(idMarca);
    })
    
  }
  loadDataAlumnos(idMarca:string){
      this._service.getDetalleMarca(idMarca).subscribe(response=>{
        this.cubos=response;
      })
  }

}