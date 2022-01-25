import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenHeaderInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<void>>{
    let authtoken = localStorage.getItem("token") || "";
    let authReq = req.clone({
      headers:req.headers.set("Authentication",authtoken),
    });
    return next.handle(authReq);
  }
}
