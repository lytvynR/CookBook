import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './routes/routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared-module';
import { SideNavComponent } from './components/layout/side-nav/side-nav.component';
import { ToolbarComponent } from './components/layout/toolbar/toolbar.component';
import { RecipeModule } from './components/recipes/recipe.module';

@NgModule({
  declarations: [AppComponent, SideNavComponent, ToolbarComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, SharedModule, RecipeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
