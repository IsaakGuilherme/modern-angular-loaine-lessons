import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css',
})
export class Hello {

  protected title = 'Welcome to Modern Angular!';

  protected isDisable = false;

  protected onClick() {
    console.log("Button clicked!");
    this.isDisable = !this.isDisable;
  }

  protected count = signal(0);

  protected doubleCount = computed(() => this.count() * 2);

  protected increaseCounter() {
    this.count.update(value => value + 1);
  }

  private readonly countLog = effect(() => console.log('Count changed!', this.count()))

  protected decreaseCounter() {
    if (this.count() > 0) {
      this.count.update(value => value - 1);
    } else {
      console.log("Counter cannot go below zero;");
    }
  }

  protected resetCounter() {
    this.count.set(0);
  }
}
