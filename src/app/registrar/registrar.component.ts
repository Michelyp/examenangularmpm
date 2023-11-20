import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceCubos } from '../services/service.cubos';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent {
  @ViewChild('cajanombre') cajaNombreRef!: ElementRef;
  @ViewChild('cajaemail') cajaEmailRef!: ElementRef;
  @ViewChild('cajapsw') cajaPswRef!: ElementRef;

  constructor(private _service: ServiceCubos, private _router: Router) {}

  registrar() {
    var nombre = this.cajaNombreRef.nativeElement.value;
    var email = this.cajaEmailRef.nativeElement.value;
    var psw = this.cajaPswRef.nativeElement.value;

    var usuario = {
      idAlumno: 0,
      nombre: nombre,
      email: email,
      pass: psw
    };
    console.log(usuario);

    this._service.postRegistrar(usuario).subscribe((response) => {
      console.log(response);
      this._router.navigate(['/login']);
    });
  }
}
