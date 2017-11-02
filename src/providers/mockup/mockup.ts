import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import {IDataProvider} from "../i-data/i-data";
import {Project} from "../../model/project";

/**
 * @Author Matthias
 * @Info MockupProvider
 * Mithilfe dieser Klasse koennen die Funktionen ohne ein existierendes Backend geladen werden.
 */

@Injectable()
export class MockupProvider implements IDataProvider {

  constructor() {}

  public get(itemName: string, id: string): any {

      if(itemName === 'Project') {
        switch(id) {
            case '1':
              return <Project>{id: '1', desc: 'Test'};
        }
      }

      return null;
  }

  public insert(itemName: string, item: any): boolean {
      return null;
  }

  public update(itemName: string, item: any, id: string): boolean {
      return null;
  }

  public delete(itemName: string, id: string): boolean {
      return null;
  }
}
