import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cubo } from 'src/models/Cubo';
import { ServiceCubos } from '../services/service.cubos';
import { Comentario } from 'src/models/Comentario';


@Component({
  selector: 'app-detallecubo',
  templateUrl: './detallecubo.component.html',
  styleUrls: ['./detallecubo.component.css']
})
export class DetallecuboComponent implements OnInit {
  public cubo!: Cubo;
  public comentarios!: Array<Comentario>;

  constructor(private _service:ServiceCubos, private _activeRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params:Params)=>{
      var idCubo = params['idCubo'];
      this.loadDataAlumnos(idCubo);
      this.loadDataComentarios(idCubo);
    })
    
  }
  loadDataAlumnos(idCubo:string){
      this._service.getDetalleCubo(idCubo).subscribe(response=>{
        this.cubo=response;
      })
  }
  loadDataComentarios(idCubo:string){
    this._service.getComentariosCubo(idCubo).subscribe(response=>{
      this.comentarios=response;
    })
}

}


