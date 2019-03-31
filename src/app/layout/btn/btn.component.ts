import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BtnComponent implements OnInit {
  @Input()
  text: string;

  @Input()
  disabled: boolean = false;

  @Output()
  click$: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
