import { Component } from '@angular/core';
import { district } from 'src/assets/district';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent {
collections = district;

}
