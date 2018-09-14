
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Product} from '../models/Product';
import { toPromise } from 'rxjs-compat/operator/toPromise';
@Injectable()
export class ProductService{
constructor(private http:Http){

}
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}
public getDataFromServer():Promise<any>{
  var url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
  return this.http.get(url).toPromise().then(response=>{
    return response.json().mobiles as Product[];
  }).catch(this.handleError);
}
}
