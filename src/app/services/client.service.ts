import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environments';
import {FormControl, ɵFormGroupValue, ɵTypedOrUntyped} from '@angular/forms';

export interface Client {
  id?: number;
  nom: string;
  email: string;
  telephone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = environment.apiUrl+'/clients';

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  addClient(client: ɵTypedOrUntyped<{
    telephone: FormControl<string | null>;
    nom: FormControl<string | null>;
    email: FormControl<string | null>
  }, ɵFormGroupValue<{
    telephone: FormControl<string | null>;
    nom: FormControl<string | null>;
    email: FormControl<string | null>
  }>, any>): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client);
  }
}
