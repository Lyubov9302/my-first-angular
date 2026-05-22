import { CommonModule } from '@angular/common';
import { Component, effect, signal, WritableSignal } from '@angular/core';
import { Test } from '../../test/test';
import { QUESTIONS } from '../../../constants';

@Component({
  selector: 'app-angular',
  standalone: true,
  templateUrl: './angular.html',
  styleUrl: './angular.scss',
  imports: [CommonModule, Test],
})
export class Angular {
  questions: WritableSignal<any[]> = signal(QUESTIONS);

  constructor() {
    effect(() => {
      console.log(`Updated Questions: ${JSON.stringify(this.questions())}`);
    });
    // Call the addQuestionOnce method after a delay of 1000 miliseconds
    setTimeout(() => this.addQuestionOnce(), 5000);
  }

  addQuestionOnce() {
    const newQuestion = {
      number: this.questions().length + 1,
      question: `New question ${this.questions().length + 1}`,
      difficulty: 'Easy',
    };
    this.questions.set([...this.questions(), newQuestion]);
  }
}
