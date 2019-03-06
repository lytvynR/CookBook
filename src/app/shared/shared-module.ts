import { NgModule } from '@angular/core';
import { MatModule } from './material.module';

@NgModule({
    imports: [MatModule],
    exports: [MatModule],
})
export class SharedModule {}
