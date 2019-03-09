import { NgModule } from '@angular/core';
import { MatModule } from './material.module';
import { BaseComponent } from './base-component/base-component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BaseComponent],
  imports: [MatModule, CommonModule, HttpClientModule],
  exports: [MatModule, CommonModule, HttpClientModule],
})
export class SharedModule {}
