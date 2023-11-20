import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../services/service.cubos';
import { Compra } from 'src/models/Compra';

@Component({
  selector: 'app-comprasusuario',
  templateUrl: './comprasusuario.component.html',
  styleUrls: ['./comprasusuario.component.css'],
})
export class ComprasusuarioComponent implements OnInit{
  public compras!: Array<Compra>;

  constructor(
    private _service: ServiceCubos,
  ) {}
  ngOnInit(): void {
    this.loadDataAlumnos();
  }
  loadDataAlumnos() {
    this._service.getCompras().subscribe((response) => {
      this.compras = response;
    });
  }
}
