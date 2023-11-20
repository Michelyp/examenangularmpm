import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../services/service.cubos';
import { Usuario } from 'src/models/Usuario';

@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.component.html',
  styleUrls: ['./perfilusuario.component.css'],
})
export class PerfilusuarioComponent implements OnInit {
  public usuario!: Usuario;

  constructor(
    private _service: ServiceCubos,
  ) {}
  ngOnInit(): void {
    this.loadDataUsuario();
  }
  loadDataUsuario() {
    this._service.getPerfil().subscribe((response) => {
      this.usuario = response;
    });
  }
}
