import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Injectable()
export class ServiceCubos {
  constructor(private _http: HttpClient) {}

  login(log: Object): Observable<any> {
    var json = JSON.stringify(log);
    var header = new HttpHeaders().set('content-type', 'application/json');
    var request = "api/manage/login";
    var url = environment.urlApiCubos + request;
    return this._http.post(url, json, { headers: header });
  }
  postRegistrar(alumno: Object): Observable<any> {
    var json = JSON.stringify(alumno);
    var header = new HttpHeaders().set('content-type', 'application/json');
    var request = "api/manage/registrousuario";
    var url = environment.urlApiCubos + request;
    return this._http.post(url, json,{ headers: header });
  }
  //lista de nombre marcas
  getMarcas(): Observable<any> {
    var request = "api/cubos/marcas";
    var url = environment.urlApiCubos + request;
    return this._http.get(url);
  }
  getDetalleMarca(marca: string): Observable<any> {
    var request = "api/cubos/cubosmarca/" + marca;
    var url = environment.urlApiCubos + request;
    return this._http.get(url);
  }
  getDetalleCubo(idCubo: string): Observable<any> {
    var request = "api/cubos/" + idCubo;
    var url = environment.urlApiCubos + request;
    return this._http.get(url);
  }
  getComentariosCubo(idCubo: string): Observable<any> {
    var request = "api/ComentariosCubo/GetComentariosCubo/" + idCubo;
    var url = environment.urlApiCubos + request;
    return this._http.get(url);
  }
  getCubos(): Observable<any> {
    var request = "api/cubos";
    var url = environment.urlApiCubos + request;
    return this._http.get(url);
  }
  //Servicios con token
  getToken() {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    return headers;
  }
  getPerfil(): Observable<any> {
    const header = this.getToken();
    var request = "api/manage/perfilusuario"
    var url = environment.urlApiCubos + request;
    return this._http.get(url,{ headers: header });
  }
  getCompras(): Observable<any> {
    const header = this.getToken();
    var request = "api/compra/comprasusuario";
    var url = environment.urlApiCubos + request;
    return this._http.get(url,{ headers: header });
  }
  postPedidos(idPedido: number): Observable<any> {
    const header = this.getToken();
    var body="";
    var request = "api/compra/insertarpedido/" + idPedido;
    var url = environment.urlApiCubos + request;
    return this._http.post(url, body,{ headers: header });
  }
}
