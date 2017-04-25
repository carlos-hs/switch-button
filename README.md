## Switch Button (Angular 2)

A switch button for your app, based on ngSwitch.

------------------------------------------------------
## How to use

Single:

  your-app.component.html:
  
    <switch-button [value]="switch.value" (change)="onChange($event)"></switch-button>

  your-app.component.ts:
  
    switch: Data = { value: false };
    onChange(checked) {
        this.switch.value = checked;
    }


Multiple:
  
  your-app.component.html:
  
    <div *ngFor="let switch of switches; let i = index">
        <switch-button [value]="switch.value" (change)="onChange($event, i)"></switch-button>
    </div>
  
  your-app.component.ts:
  
    switches: Data[] = [{ value: true }, { value: false }, { value: false }, { value: true }];
    onChange(checked, index) {
        this.switches[index].value = checked;
    }
