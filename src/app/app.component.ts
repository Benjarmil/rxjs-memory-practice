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
    concatMap( (sequence) => concat(this.showSequence(sequence), this.gatherSequence(sequence))),
  );

  showSequence(sequence: number[]) {
    return interval(1000).pipe(
      zipWith(from([...sequence, NaN])),
      map( ([_, card]): GameInfo => ({
        highlightCard: card,
        info: `Level ${sequence.length - 2}`,
        nextCard: isNaN(card) ? sequence[0] : NaN
      })),
    );
  }

  gatherSequence(sequence: number[]) {
    return from(sequence).pipe(
      zipWith(this.clickSubject),
      map( ([card, sequenceCard], index): GameInfo => {
        if (card !== sequenceCard) throw new Error(`Game Over`);
        else return { highlightCard: NaN, nextCard: sequence[index+1], info: `Level ${sequence.length - 2}`}
      }),
      tap({ complete: () => this.gameSubject.next(this.generateSequence(sequence.length + 1)) }),
      catchError( () => of({highlightCard: NaN, nextCard: NaN, info: `Game Over, score: ${sequence.length - 3}`}))
    );
  }

  generateSequence(length: number): number[] {
    return new Array(length).fill(0).map(() => Math.floor(Math.random() * 9) + 1);
  }

}
