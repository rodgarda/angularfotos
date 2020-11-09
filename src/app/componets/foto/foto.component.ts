import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { FotosService } from '../../services/fotos.service';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {
  fotos: Photo[]=[];
  constructor(private fotoser:FotosService) { }

  ngOnInit(){
    this.fotoser.getphotos()
     .subscribe(
      photos=>this.fotos=photos,
      err=>console.log(err)
    )
  }

}
