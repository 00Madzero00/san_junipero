import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';

import {MediaMatcher} from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { GigsComponent } from './gigs/gigs.component';
import { GigsService } from './gigs/gigs.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'music', component: MusicComponent },
  { path: 'gigs', component: GigsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    HomeComponent,
    GigsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'San Junipero' }),
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [MediaMatcher, HomeService, GigsService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
