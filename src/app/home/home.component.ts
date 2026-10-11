import { Component } from '@angular/core';
import {
} from '@angular/router';
import { ClientComponent } from '../client/client.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
  ClientComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
