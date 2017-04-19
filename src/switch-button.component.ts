import { Component, Input } from '@angular/core';

@Component({
    selector: 'switch-button',
    templateUrl: './switch-button.component.html',
    styleUrls: ['./switch-button.component.css']
})

export class SwitchButtonComponent {
    @Input() value: boolean;
    @Input() color: string;

    onSwitchButton() {
        this.value = !this.value;
        console.log(this.value);
    }
}
