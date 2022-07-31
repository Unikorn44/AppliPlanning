import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  public buttonText = '';
  @Output() btnClick = new EventEmitter();

  @Input()
	set text(name: string) {
		this.buttonText = name.toUpperCase();
	}

	constructor() {}

  ngOnInit(): void {
  }

  onClick() {
		this.btnClick.emit();
	}

}
