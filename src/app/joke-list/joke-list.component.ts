import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Joke } from '../models';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  @Input() jokes: Joke[];
  @Output() fetch = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
