import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';
import { DetailMatchComponent } from './detail-match/detail-match.component';
import { DetailMatchModule } from './detail-match/detail-match.module';



@NgModule({
  declarations: [
    HomeComponent,
    DetailMatchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    DetailMatchModule
  ],
  exports: [
    HomeComponent,
    DetailMatchComponent
  ]
})
export class PagesModule { }
