import {NgModule} from '@angular/core';
import{
    MatButtonModule
} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports:[MatButtonModule,MatCardModule,MatToolbarModule,MatSelectModule,MatFormFieldModule],
    exports:[MatButtonModule,MatCardModule,MatToolbarModule,MatSelectModule,MatFormFieldModule]
})
export class MaterialModule{}