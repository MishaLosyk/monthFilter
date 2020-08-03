import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], arg: number): any {
        if (!items || (!arg && !(arg === 0))) {
            return items;
        }
        return items.filter(it => it.dob === arg);
    
    }
}