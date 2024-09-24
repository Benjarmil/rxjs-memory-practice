import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  ngOnInit() {
    // TODO: Make the thing
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 8)
  }

}
