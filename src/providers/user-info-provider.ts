import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { UserInfo } from "../models/user-info";
import { IDataProvider } from './i-data-provider';

/**
 *
 */
@Injectable()
export class UserInfoProvider {

  constructor(private dataProvider: IDataProvider) {
  }

  public get(): Observable<UserInfo> {
      return this.dataProvider.get('userinfo', null);
  }

  public update(userInfo: UserInfo): Promise<boolean> {
      return this.dataProvider.update('userinfo', userInfo, null);
  }

}
