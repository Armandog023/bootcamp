import { Component, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.scss'
})
export class PrimerDiaComponent {
 @Input() ejemplo:string = ""
    title = 'hola mundo';
    card= {
      title:   'hola mundo',
      describtion: 'hola' 
    }
}
