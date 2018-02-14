import { NgModule } from '@angular/core';
import { TotalTimePipe } from './total-time/total-time';
@NgModule({
	declarations: [TotalTimePipe],
	imports: [],
	exports: [TotalTimePipe]
})
export class PipesModule {}
