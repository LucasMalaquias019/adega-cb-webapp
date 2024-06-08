import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = "http://localhost:3000"
  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get(`${this.url}/clientes`)
  }

  getCliente(id: any) {
    return this.httpClient.get(`${this.url}/clientes?id=${id}`)
  }
}
