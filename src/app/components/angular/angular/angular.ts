import { CommonModule } from '@angular/common';
import { Component, effect, OnInit, signal, WritableSignal } from '@angular/core';
import { Test } from '../../test/test';
import { QUESTIONS } from '../../../constants';
import { from, Observable, of, Subscriber } from 'rxjs';

@Component({
  selector: 'app-angular',
  standalone: true,
  templateUrl: './angular.html',
  styleUrl: './angular.scss',
  imports: [CommonModule],
})
export class Angular implements OnInit {
  // Створення Observable, який генерує одне значення і завершується
  observableFirst = new Observable((subscriber) => {
    subscriber.next('Привіт з RxJs');
    subscriber.complete();
  });

  // Створення Observable з допомогою оператора of
  observableSecond = of('Перше значення', 'Друге значення', 'Третє значення');

  // Створення Observable з допомогою оператора from
  observableThird = from(['Перше значення', 'Друге значення', 'Третє значення']);

  // Створення Observable з масиву чисел за допомогою оператора from
  observableForth = from([1, 2, 3]);

  // Створення Observable, яуий випускає кілька значень і потім генеріє помилку
  observableFifth = new Observable<string>((subscriber) => {
    subscriber.next('Початок потоку');
    subscriber.next('Обробка даних');
    subscriber.error('Помилка! Щось пішло не так');
    subscriber.next('Це значення не буде відправлене');
    subscriber.complete();
  });

  ngOnInit(): void {
    // Підписка на observableFirst
    // this.observableFirst.subscribe({
    //   next: (value) => console.log('Значення observableFirst:', value),
    //   error: (err) => console.log('Помилка', err),
    //   complete: () => console.log('observableFirst завершено'),
    // });
    // Підписка на observableSecond
    // this.observableSecond.subscribe({
    //   next: (value) => console.log('Значення observableSecond:', value),
    //   complete: () => console.log('observableSecond завершено'),
    // });
    // Підписка на observableThird
    // this.observableThird.subscribe({
    //   next: (value) => console.log('Значення observableThird:', value),
    //   complete: () => console.log('observableThird завершено'),
    // });
    // Проста підписка з використанням стрілкової функції
    // this.observableForth.subscribe((value) => console.log('Значення observableForth:', value));
    // Підписка на observableFifth
    // this.observableFifth.subscribe({
    //   next: (value) => console.log('Значення observableFifth:', value),
    //   error: (err) => console.error('Обробка помилки observableFifth:', err),
    //   complete: () => console.log('observableFifth завершено'),
    // });
  }

  // *************
  // questions: WritableSignal<any[]> = signal(QUESTIONS);

  // constructor() {
  //   effect(() => {
  //     console.log(`Updated Questions: ${JSON.stringify(this.questions())}`);
  //   });
  //   // Call the addQuestionOnce method after a delay of 1000 miliseconds
  //   setTimeout(() => this.addQuestionOnce(), 5000);
  // }

  // addQuestionOnce() {
  //   const newQuestion = {
  //     number: this.questions().length + 1,
  //     question: `New question ${this.questions().length + 1}`,
  //     difficulty: 'Easy',
  //   };
  //   this.questions.set([...this.questions(), newQuestion]);
  // }
}
