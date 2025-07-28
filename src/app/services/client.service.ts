import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { APIResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}
  getClients(): Observable<APIResponseModel> {
    //return this.http.get<Client>(`${environment.API_URL}/clients`);
    return this.http.get<APIResponseModel>('/api/GetAllClients');
  }
  addUpdate(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>('/api/AddUpdateClient', obj);
  }
  deleteClientById(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(
      '/api/DeleteClientByClientId?clientId' + id
    );
  }
}
