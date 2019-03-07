import { NgModule } from '@angular/core';
import { MatModule } from './material.module';
import { BaseComponent } from './base-component/base-component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data-service';

@NgModule({
  declarations: [BaseComponent],
  imports: [MatModule, CommonModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(DataService)],
  exports: [MatModule, CommonModule, HttpClientModule],
})
export class SharedModule {}
