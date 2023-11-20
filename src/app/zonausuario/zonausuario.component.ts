import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zonausuario',
  templateUrl: './zonausuario.component.html',
  styleUrls: ['./zonausuario.component.css'],
})
export class ZonausuarioComponent {
  constructor(private _router: Router) {}

  cerrar() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
