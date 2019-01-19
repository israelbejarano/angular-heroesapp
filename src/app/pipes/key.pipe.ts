import { Pipe, PipeTransform } from '@angular/core';
import { KeyRegistry } from '@angular/core/src/di/reflective_key';

@Pipe({
  name: 'key',
  pure: false
})
export class KeyPipe implements PipeTransform {

  transform(value: any): any {
    let keys = [];
    for ( let key in value) {
      if(key !== null) {
        keys.push(key);
      }
    }
    return keys;
  }

}
