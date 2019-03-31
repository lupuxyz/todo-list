import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../interface';

@Pipe({name: 'category'})
export class CategoryPipe implements PipeTransform {
  transform(value: any): any {
    return Category[value];
  }
}