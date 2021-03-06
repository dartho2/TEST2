import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url: string = 'https://yoga-server.herokuapp.com/api/service/email';
  constructor(private http: HttpClient) { }

  sendMessage(messageContent: any) {
    // console.log(JSON.stringify(messageContent))
    return this.http.post(this.url,
      JSON.stringify(messageContent),
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }
}