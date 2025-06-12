import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  effect,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Userprofile } from './userprofile/userprofile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Userprofile],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit, OnInit, OnChanges, OnDestroy {
  protected title = 'Multi_StepForm';
  count: number = 1;
  name = 'Anam';
  showUser = true;
  conuts = signal(0);;

  constructor() {
    console.log(' constructor called');
    effect(() => {
      console.log('After constructor Effect call');
    });
  }
  ngOnInit(): void {
    console.log('OnInit work ');
  }

  HandelChange() {
    this.count = this.count + 1;
    this.name = 'Ahmad';
    console.log('👉 count:', this.count);
    this.showUser = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change detected');
  }
  ngAfterViewInit(): void {
    console.log('Its ng view init work');
  }
  ngOnDestroy(): void {
    console.log('Component distroy ');
  }
}
