## Switch Button (Angular 2)

A switch button for your app, based on ngSwitch.

<img src="https://cloud.githubusercontent.com/assets/26718519/25395159/87a93f6c-29b6-11e7-9145-543587b0d00c.png">

------------------------------------------------------
## How to use

<h6><b>your-app.module.ts:</b></h6>

  import { SwitchButtonModule } from 'switch-button/switch-button.module';
  
  @NgModule({
    imports: [SwitchButtonModule],
    ...
  })


Single:

  <h6><b>your-app.component.html:</b></h6>
  
    <switch-button [value]="switch.value" (change)="onChange($event)"></switch-button>

  <h6><b>your-app.component.ts:</b></h6>
  
    switch: Data = { value: false };
    onChange(checked) {
        this.switch.value = checked;
    }


<i>Multiple:</i>
  
  <h6><b>your-app.component.html:</b></h6>
  
    <div *ngFor="let switch of switches; let i = index">
        <switch-button [value]="switch.value" (change)="onChange($event, i)"></switch-button>
    </div>
  
  <h6><b>your-app.component.ts:</b></h6>
  
    switches: Data[] = [{ value: true }, { value: false }, { value: false }, { value: true }];
    onChange(checked, index) {
        this.switches[index].value = checked;
    }
