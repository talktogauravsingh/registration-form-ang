import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json; boundary=xxxxBoundaryStringxxxx' })
};

@Injectable({
  providedIn: 'root'
})

export class RegisterserviceService {

  constructor(private http : HttpClient) { }

  private apiurl = "http://localhost:8080/ebrandztaskapi/";

  getData() {
    return this.http.get(this.apiurl);
 }

 postData(formdata) {
   return this.http.post(this.apiurl + "register.php", formdata);
}

}
