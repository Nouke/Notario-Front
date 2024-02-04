import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credential, SigninResponse } from '../types/auth';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    signin(credential: Credential): Observable<SigninResponse> {
        return this.http.post<SigninResponse>(
            `${environment.baseUrl}/auth/signin`,
            credential
        );
    }
}
