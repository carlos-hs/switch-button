import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'switch-button',
    templateUrl: './switch-button.component.html',
    styleUrls: ['./switch-button.component.css']
})

export class SwitchButtonComponent {
    @Input() value: boolean;
    @Input() color: string;
    @Output() change = new EventEmitter<boolean>();

    onSwitchButton() {
        this.value = !this.value;
        this.change.emit(this.value);
    }
}
