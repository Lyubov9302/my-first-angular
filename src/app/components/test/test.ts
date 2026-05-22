import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { TodoService } from '../../services/todo';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test {
  @Input() childMessage: string = '';
  @Output() messageFromChild = new EventEmitter<string>();
  // Кастомний валідатор для віку
  ageValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const isValidAge = value >= 18 && value <= 120;
    return isValidAge ? null : { ageInvalid: 'Age must be between 18 and 120' };
  }

  complexForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl(null, [Validators.required, this.ageValidator]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    consent: new FormControl(false, Validators.requiredTrue),
  });

  onSubmit() {
    console.log('Form value', this.complexForm.value);
    console.log('Form status - is valid:', this.complexForm.valid);
    console.log('Form controls:', this.complexForm.controls);
  }

  // Гетери для полів форми

  get name() {
    return this.complexForm.get('name');
  }

  get email() {
    return this.complexForm.get('email');
  }

  get age() {
    return this.complexForm.get('age');
  }

  get password() {
    return this.complexForm.get('password');
  }

  get consent() {
    return this.complexForm.get('consent');
  }
}

// @Input() childMessage: string = '';

// @Output() messageFromChild = new EventEmitter<string>();

// newTask: string = '';
// tasks: string[] = [];

// constructor() {}

// private todoService = inject(TodoService);

// ngOnInit() {
//   this.tasks = this.todoService.getTasks();
// }

//   addTask() {
//     if (this.newTask.trim() !== '') {
//       this.todoService.addTask(this.newTask.trim());
//       this.newTask = '';
//       this.updateTasks();
//     }
//   }
//   removeTask(index: number) {
//     this.todoService.removeTask(index);
//     this.updateTasks();
//   }

//   private updateTasks() {
//     this.tasks = this.todoService.getTasks();
//   }
// }

//   isEnabled: boolean = false;

//   isActive: boolean = false;
//   isDisabled: boolean = true;

//   isClickedState: boolean = false;

//   inputText: string = 'Test';

//   users = ['Alina', 'Ivan', 'Serhii', 'Diana'];

//   items = [
//     { id: 1, name: 'Apple' },
//     { id: 2, name: 'Banana' },
//     { id: 3, name: 'Orange' },
//     { id: 4, name: 'Kiwi' },
//     { id: 5, name: 'Grapes' },
//   ];

//   appState = 'paused';

//   today = new Date();
//   longText = 'Дуже довгий текст, який треба обрізати';

//   // _____________________________________
//   @Input() childMessage: string = '';

//   @Output() messageFromChild = new EventEmitter<string>();

//   // ______________________________________

//   getFullName() {
//     return `Мене звуть ${this.firstName} ${this.lastName}`;
//   }

//   toggleState() {
//     this.isClickedState = true;
//   }

//   sendMessageToParent() {
//     this.messageFromChild.emit('Я твій син');
//   }
// }
