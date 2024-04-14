import {Component} from '@angular/core';
import { FlexModule } from '@ngbracket/ngx-layout/flex';
import { MatCard, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardFooter } from '@angular/material/card';

@Component({
    selector: 'demo-layout-fill',
    template: `
    <mat-card class="card-demo">
      <mat-card-title><a href="" target="_blank">Layout Fill</a></mat-card-title>
      <mat-card-subtitle>Using 'fxFill' to fill available width and height of parent container.
      </mat-card-subtitle>
      <mat-card-content class="large">
        <div fxLayout="column" fxFill>
          <div fxLayout fxFlex>
            <div class="one" fxFlex="20" fxLayoutAlign="center center"> A</div>
            <div class="two" fxFlex="80" fxLayoutAlign="center center"> B</div>
          </div>
        </div>
      </mat-card-content>
      <mat-card-footer class="bottomPad">
        <div class="hint"></div>
      </mat-card-footer>
    </mat-card>
  `,
    standalone: true,
    imports: [MatCard, MatCardTitle, MatCardSubtitle, MatCardContent, FlexModule, MatCardFooter]
})
export class LayoutFillComponent {}
