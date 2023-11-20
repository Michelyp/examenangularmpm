import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/models/Cubo';
import { ServiceCubos } from '../services/service.cubos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public cubos!: Array<Cubo>;
  constructor(private _service: ServiceCubos) {}
  ngOnInit(): void {
    this.loadDataCubos();
  }
  loadDataCubos() {
    this._service.getCubos().subscribe((response) => {
      this.cubos = response;
    });
  }
}
