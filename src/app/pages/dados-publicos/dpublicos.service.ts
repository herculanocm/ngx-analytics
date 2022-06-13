import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuditUserUpload } from './dpublicos-aux';

@Injectable()
export class DadosPublicosService {
    private _url: string;
    constructor(private _http: HttpClient) {
        this._url = 'http://localhost:3000/api/thumbnail-upload';
    }
    upload(file: File): Observable<HttpEvent<any>> {
        const formData: FormData = new FormData();
        formData.append('file', file);
        const req = new HttpRequest('POST', `${this._url}`, formData, {
        reportProgress: true,
        responseType: 'json'
        });
        return this._http.request(req);
    }

    getAll(): Observable<AuditUserUpload[]> {
        return this._http.get<AuditUserUpload[]>('http://localhost:3000/api/v1/audit-user-uploads');
    }
}