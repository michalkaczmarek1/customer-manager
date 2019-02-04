import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, retry } from "rxjs/operators";
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

    constructor(private messageService: MessageService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);
        return next.handle(req).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse) {
                this.messageService.showError(`Blad polaczenia: ${error.message}`);
            }
            return Observable.throw(error);
        }));
    }
}