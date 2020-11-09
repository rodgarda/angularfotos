import { Component } from '@angular/core';
import { FotosService} from './services/fotos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  albumId=[1,2,3];
  constructor(private fotos:FotosService){}
 
}
