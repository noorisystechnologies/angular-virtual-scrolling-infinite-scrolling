import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamicProperty'
})
export class DynamicPropertyPipe implements PipeTransform {

  transform(obj: any, property: string): any {
    return obj[property];
  }

}
