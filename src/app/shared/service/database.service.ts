import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private onDatachanged$ = new BehaviorSubject<any[]>([])
  public onDataChangedObservabled$ = this.onDatachanged$.asObservable();

  constructor(private httpClient: HttpClient) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.getListData()
    return;
  }

  getListData(pageIndex?: number, pageSize?: number) {
    console.log('1')
    this.httpClient.get(environment.apiUrl + `api/saleorders`)
      .subscribe((data: any) => {
        this.onDatachanged$.next(data);
      })
  }

  getDataByID(id: any): Observable<any> {
    return this.httpClient.get(environment.apiUrl + `api/saleorders/${id}`);
  }

  updateData(payload: any): Observable<any> {
    let subject = new Subject<any>();
    if (!payload.id) {

      this.httpClient.post(environment.apiUrl + `api/saleorders`, payload)
        .subscribe((data) => {
          this.getListData();
          subject.next(data);
        });
    } else {
      this.httpClient.put(environment.apiUrl + `api/saleorders/${payload.id}`, payload)
        .subscribe((data) => {
          this.getListData();
          subject.next(data);
        })
    }
    return subject;
  }

  deleteData(id: any): Observable<any> {
    let subject = new Subject();
    this.httpClient.delete(environment.apiUrl + `api/saleorders/${id}`)
      .subscribe((data) => {
        this.getListData();
        subject.next(data);
      });

    return subject;

  }

}
