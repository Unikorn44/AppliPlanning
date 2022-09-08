import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

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

  @Input() theme!: string;

  @HostBinding("class")
  get hostClasses(): string {
    let classes = ["btn"];
    if (this.theme) {
      classes.push(`btn-${this.theme}`);
    }
    return classes.join(" ");
  }

	constructor() {}

  ngOnInit(): void {
  }

  onClick() {
		this.btnClick.emit();
	}

}
