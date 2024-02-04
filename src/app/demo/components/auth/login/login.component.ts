import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/demo/service/auth.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
    providers: [MessageService],
})
export class LoginComponent {
    valCheck: string[] = ['remember'];

    password: string = '';
    email: string = '';

    constructor(
        public layoutService: LayoutService,
        public authService: AuthService,
        private service: MessageService
    ) {}

    onSubmit() {
        this.authService
            .signin({ username: this.email, password: this.password })
            .subscribe({
                next: (response) => {
                    console.log('Login response : ', response);
                    this.showAuthOkToast();
                    this.resetForm();
                },
                error: (response) => {
                    console.log('Login response failed : ', response.error);
                    this.showAuthFailedToast();
                },
            });
    }
    resetForm() {
        this.email = '';
        this.password = '';
    }
    showAuthOkToast() {
        this.service.add({
            key: 'tst',
            severity: 'success',
            summary: 'Signin success',
        });
    }
    showAuthFailedToast() {
        this.service.add({
            key: 'tst',
            severity: 'error',
            summary: 'Signin Failed',
        });
    }
}
