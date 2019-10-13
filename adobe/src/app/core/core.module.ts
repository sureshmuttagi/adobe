import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiPrefixInterceptor } from '../core/interceptors/api-prefix.interceptor';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [],
    declarations: [],
    providers: [
        ApiPrefixInterceptor,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiPrefixInterceptor,
            multi: true
        }
    ]
})
export class CoreModule {
    constructor() { }
}