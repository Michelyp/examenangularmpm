import { Component , OnInit } from '@angular/core';
import { Cubo } from 'src/models/Cubo';
import { ServiceCubos } from '../services/service.cubos';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comprarcubo',
  templateUrl: './comprarcubo.component.html',
  styleUrls: ['./comprarcubo.component.css']
})
export class ComprarcuboComponent implements OnInit {
  public cubos!: Array<Cubo>;
  public idPedido!:string;
  constructor(private _service: ServiceCubos, private _router: Router) {}
  ngOnInit(): void {
    this.loadDataCubos();
  }
  loadDataCubos() {
    this._service.getCubos().subscribe((response) => {
      this.cubos = response;
    });
  }
  comprar(idPedido:number){
    this._service.postPedidos(idPedido).subscribe((response) => {
      console.log("Se ha comprado");
      this._router.navigate(["/zonaUsuario"]);
      
    });
    
  }


}