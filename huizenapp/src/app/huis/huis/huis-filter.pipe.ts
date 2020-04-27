import { Pipe, PipeTransform } from '@angular/core';
import { Huis } from './huis.model';

@Pipe({
  name: 'huisFilter'
})
export class HuisFilterPipe implements PipeTransform {
  transform(huizen: Huis[], f: string): Huis[] {
    if (!f || f.length === 0) {
      return huizen;
    }
    return huizen.filter(h => h.soort.toLowerCase().startsWith(f.toLowerCase()));
  }

}
