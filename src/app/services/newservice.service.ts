import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor(private httpclient:HttpClient) { }

listnews():Observable<any>{
  return this.httpclient.get<any>("https://newsapi.org/v2/everything?q=tesla&from=2021-03-17&sortBy=publishedAt&apiKey=6636a1a60032465793d88a9a332283f4");}
}
