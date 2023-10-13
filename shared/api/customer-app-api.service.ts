import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CustomerAppApiService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  CustomerRegister(body: any): Observable<any> {
    // console.log(body);
    return this.http.post<any>(`${environment.CustomerRegister}`, body);
  }
  CustomerLogin(body: any): Observable<any> {
    // console.log(body);
    return this.http.post<any>(`${environment.CustomerLogin}`, body);
  }
  CustomerForgot(body: any): Observable<any> {
    // console.log(body);
    return this.http.put<any>(`${environment.CustomerForgot}`, body);
  }

  CustomerPlans(body: any): Observable<any> {
    // console.log(body);
    return this.http.post<any>(`${environment.CustomerPlans}`, body);
  }

  CustomerPlansget(): Observable<any> {
    return this.http.get<any>(`${environment.CustomerPlans}`);
  }

  CustomerUpdate(body: any): Observable<any> {
    let id: number = body.id;
    //  console.log(environment.CustomerUpdate,id);
    console.log(body);

    return this.http.put<any>(`${environment.CustomerUpdate}/${id}`, body);
  }
  CustomerDelete(id: any): Observable<any> {
    return this.http.delete<any>(`${environment.CustomerDelete}/${id}`);
  }

  CustomerTransportPlans(body: any): Observable<any> {
    // console.log(body);
    return this.http.post<any>(`${environment.CustomerTransportPlans}`, body);
  }

  CustomerTransportPlansget(): Observable<any> {
    // console.log(body);
    return this.http.get<any>(`${environment.CustomerTransportPlans}`);
  }

  CustomerTransportPlansUpdate(body: any): Observable<any> {
    let id: number = body.id;
    //  console.log(environment.CustomerUpdate,id);
    console.log(body);

    return this.http.put<any>(`${environment.CustomerTransportPlansUpdate}/${id}`, body);
  }

  CustomerTransportPlanDelete(id: any): Observable<any> {
    return this.http.delete<any>(`${environment.CustomerTransportPlansUpdate}/${id}`);
  }
}
