import { CommonModule } from '@angular/common';
import { Component, effect, OnInit, signal, WritableSignal } from '@angular/core';
import { Test } from '../../test/test';
import { QUESTIONS } from '../../../constants';
import {
  AsyncSubject,
  BehaviorSubject,
  delay,
  filter,
  forkJoin,
  from,
  map,
  Observable,
  of,
  ReplaySubject,
  Subject,
  Subscriber,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-angular',
  standalone: true,
  templateUrl: './angular.html',
  styleUrl: './angular.scss',
  imports: [CommonModule],
})
export class Angular implements OnInit {
  // Створення Subject
  // subjectFirst = new Subject<number>();

  // Отримання Observable з Subject
  // observable = this.subjectFirst.asObservable();

  // Cтворення BehaviorSubject з початковим значенням
  behaviorSubject = new BehaviorSubject<number>(0);

  // Cтворення ReplaySubject, який зберігає два останні значення
  // replaySubject = new ReplaySubject<number>(2);

  // Cтворення AsyncSuject
  // asyncSubject = new AsyncSubject<number>();

  // ***********  Створення декількох Observable, які моделюють асинхронні запити
  observable1 = of('Запит 1').pipe(delay(1000)); // Імітація запиту з затримкою 1 сек
  observable2 = of('Запит 2').pipe(delay(500)); // Імітація запиту з затримкою 0.5 сек
  observable3 = of('Запит 3').pipe(delay(2000)); // Імітація запиту з затримкою 2 сек

  // Використання forkJoin для комбінування результатів усіх трьох запитів
  combined = forkJoin([this.observable1, this.observable2, this.observable3]);

  ngOnInit(): void {
    // ************ Використання операторів map, filter, tap *********
    // this.behaviorSubject
    //   .pipe(
    // Використання tap для ведення журналу значень (для дебагінга чи відстеження)
    // tap((value) => console.log('перед обробкою', value)),
    // фільтруємо, залишаємо лише значення більші за 0
    // filter((value) => value > 0),
    // мапінг: множимо кожне значення на 10
    // map((value) => value * 10),
    // )
    // .subscribe({
    //   next: (value) => console.log('Оброблене значення:', value),
    //   complete: () => console.log('Завершено'),
    // });

    // Випуск значень через behaviorSubject
    // this.behaviorSubject.next(1);
    // this.behaviorSubject.next(2);
    // this.behaviorSubject.next(-1); //це значення ігнорується фільтром
    // this.behaviorSubject.next(3);

    // Завершення потоку
    // this.behaviorSubject.complete();

    // Subject продукує перше значення
    // this.subjectFirst.next(1);
    //  this.observable.next(); - тут не можемо викликати next

    // Підписка першого споживача на Subject
    // this.subjectFirst.subscribe({
    //   next: (value) => console.log('Підписник 1:', value),
    //   error: (err) => console.log('Підписник 1, помилка:', err),
    //   complete: () => console.log('Підписник 1 завершено'),
    // });
    // Subject продукує друге значення
    // this.subjectFirst.next(2);
    // Підписка другого споживача на Subject
    // this.subjectFirst.subscribe({
    //   next: (value) => console.log('Підписник 2:', value),
    //   error: (err) => console.log('Підписник 2, помилка:', err),
    //   complete: () => console.log('Підписник 2 завершено'),
    // });
    // Subject продукує третє значення
    // this.subjectFirst.next(3);
    // Завершення Subject
    // this.subjectFirst.complete();

    //  ******************** Behavior subject ************
    // this.behaviorSubject.subscribe((value) => console.log('Підписник 1:', value));

    // випуск нових значень
    // this.behaviorSubject.next(1);
    // this.behaviorSubject.next(2);

    // Другий підписник, який отримає останнє значення(2) відразу після підписки
    // this.behaviorSubject.subscribe((value) => console.log('Підписник 2:', value));

    // Випуск кінцевого значення
    // this.behaviorSubject.next(3);

    // Завершення Behavior subject
    // this.behaviorSubject.complete();

    //  ******************** ReplaySubject ************
    // this.replaySubject.next(1);
    // this.replaySubject.next(2);
    // this.replaySubject.next(3);

    // Підписка на ReplaySubject, отримає два останні значення (2,3) відразу
    // this.replaySubject.subscribe((value) => console.log('Підписник:', value));

    // Завершення ReplaySubject
    // this.replaySubject.complete();

    //  ********************AsyncSubject ************

    // Випуск значень
    // this.asyncSubject.next(1);
    // this.asyncSubject.next(2);
    // this.asyncSubject.next(3);

    // Підписка на AsyncSubject поки що не отримає жодниз значень
    // this.asyncSubject.subscribe((value) => console.log('Підписник на AsyncSubject:', value));

    // випуск кінцевого значення і завершення
    //   this.asyncSubject.next(4);
    //   this.asyncSubject.complete();

    // використання оператора forkJoin
    this.combined.subscribe({
      next: ([response1, response2, response3]) => {
        console.log('Результат forkJoin:', response1, response2, response3);
      },
      complete: () => console.log('Всі запити завершено'),
    });
  }

  // *********************
  // Створення Observable, який генерує одне значення і завершується
  // observableFirst = new Observable((subscriber) => {
  //   subscriber.next('Привіт з RxJs');
  //   subscriber.complete();
  // });
  // Створення Observable з допомогою оператора of
  // observableSecond = of('Перше значення', 'Друге значення', 'Третє значення');
  // Створення Observable з допомогою оператора from
  // observableThird = from(['Перше значення', 'Друге значення', 'Третє значення']);
  // Створення Observable з масиву чисел за допомогою оператора from
  // observableForth = from([1, 2, 3]);
  // Створення Observable, яуий випускає кілька значень і потім генеріє помилку
  // observableFifth = new Observable<string>((subscriber) => {
  //   subscriber.next('Початок потоку');
  //   subscriber.next('Обробка даних');
  //   subscriber.error('Помилка! Щось пішло не так');
  //   subscriber.next('Це значення не буде відправлене');
  //   subscriber.complete();
  // });
  // ngOnInit(): void {
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
  // }
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
