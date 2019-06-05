import { Component } from '@angular/core';
import { Joke } from './models';
import { JokeService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jokes: Joke[] = [];

  constructor(private jokeService: JokeService) {}

  onFetchJokes() {
    this.jokes = [{ id: 1, joke: 'Mock' }];
  }
}
