import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {BehaviorSubject, Subject, catchError, concat, concatMap, from, interval, map, of, tap, zipWith} from 'rxjs';

interface GameInfo {
  highlightCard: number;
  info: string;
  nextCard: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  cards = new Array(9).fill(0).map((_, i) => i + 1);

  clickSubject = new Subject<number>();

  gameSubject = new BehaviorSubject<number[]>(this.generateSequence(3))
  game$ = this.gameSubject.pipe(
    map((): GameInfo => ({highlightCard: NaN, info: '', nextCard: NaN}))
  );

  generateSequence(length: number): number[] {
    return new Array(length).fill(0).map(() => Math.floor(Math.random() * 9) + 1);
  }

}
