import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule],
    exports: [MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule],
})
export class MaterialModule {}
