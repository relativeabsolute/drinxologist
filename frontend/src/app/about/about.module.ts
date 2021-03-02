import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
    declarations: [AboutComponent],
    imports: [CommonModule, AboutRoutingModule, MaterialModule],
})
export class AboutModule {}
