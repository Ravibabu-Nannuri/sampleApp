import {Injectable} from '@angular/core';
import {
  Http,
  Headers,
  Response,
  Request,
  BaseRequestOptions,
  RequestMethod,
  ResponseContentType
} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {LoaderService} from './loader/loader-service';
@Injectable()
export class HttpClient {
  constructor(private http: Http, private loaderService : LoaderService) {}

  post(url: string, body: any = {}) {
    return this.request(url, RequestMethod.Post, body);
  }

  get(url: string) {
    return this.request(url, RequestMethod.Get);
  }

  put(url: string, body: any) {
    return this.request(url, RequestMethod.Put, body);
  }

  postAndGetBlob(url: string, body: any = {}) {
    return this.request(url, RequestMethod.Post, body, true);
  }

  private request(url: string, method: RequestMethod, body?: any, isBlob = false): Observable < Response > {
    this.showLoader();
    const options = new BaseRequestOptions();
    options.url = url;
    options.method = method;
    options.body = body;
    if (isBlob) {
      options.responseType = ResponseContentType.Blob;
    }
    const request = new Request(options);
    return this
      .http
      .request(request)
      .catch((error: any) => this.onErrorHandler(error))
      . finally(() => {
        this.onEnd();
      });
  }

  private onErrorHandler(error: any) {
    const errors = error.json();
    if (error.status === 406 && Array.isArray(errors) && errors.indexOf('User is not logged in.') !== -1) {

    }
    else if (error.status === 401 && Array.isArray(errors) && errors.indexOf('CSRF validation failed') !== -1)
    {
      // TODO: should logout after getting token
    }
    return Observable.throw(errors);
  }
  private onEnd(): void {
    this.hideLoader();
  }

  private showLoader(): void {
    console.log('loader show');
    this
      .loaderService
      .show();
  }

  private hideLoader(): void {
    this
      .loaderService
      .hide();
  }
}