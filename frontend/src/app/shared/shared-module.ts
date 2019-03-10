import { NgModule } from '@angular/core';
import { MatModule } from './material.module';
import { BaseComponent } from './base-component/base-component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './dialogs/dialog.component';

@NgModule({
  entryComponents: [DialogComponent],
  declarations: [BaseComponent, DialogComponent],
  imports: [MatModule, CommonModule, HttpClientModule],
  exports: [MatModule, CommonModule, HttpClientModule],
})
export class SharedModule {}
