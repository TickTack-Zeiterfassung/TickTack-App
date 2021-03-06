import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'totalTimePipe'})
export class TotalTimePipe implements PipeTransform {
    transform(time: number, milli: boolean = true): string {

        let tmp = 0;

        if(milli) {
            tmp = Math.floor(time / 1000);
        } else {
            tmp = time;
        }

        const hours: number =  Math.floor(tmp / (60 * 60));
        tmp = tmp % (60 * 60);
        const mins: number = Math.floor(tmp / 60);
        const secs: number = tmp % 60;

        return hours + ' Std. ' + mins + ' Min. ' + secs + ' Sek.';
    }
}