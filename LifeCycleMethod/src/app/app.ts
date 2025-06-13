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
import { ReversePipe } from './reverse-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Userprofile, ReversePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App
  implements
    AfterViewInit,
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterContentChecked,
    AfterViewChecked
{
  protected title = 'LifeCycleMethod';
  count: number = 1;
  name = 'Anam';
  datem = '2003-01-26';
  datea = '2002-03-22';
  curr = 300;
  showUser = true;
  conuts = signal(0);
  today!: string | number | Date;
  signalCount = signal(10);
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
    console.log('👉 count:', this.count);
    this.showUser = false;
    this.signalCount.set(this.signalCount() + 1);
  }
  ngAfterContentChecked(): void {
    console.log('Content checked Aftre');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
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
