import { Component, Input, OnInit } from '@angular/core';
import { Joke } from '../models';

@Component({
  selector: 'app-joke-item',
  templateUrl: './joke-item.component.html',
  styleUrls: ['./joke-item.component.css']
})
export class JokeItemComponent implements OnInit {
  @Input() joke: Joke;

  constructor() {}

  ngOnInit() {}
}
