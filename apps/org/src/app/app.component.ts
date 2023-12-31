import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BeforeEachErrorModule } from '@org/beforeEachError';

@Component({
  standalone: true,
  imports: [RouterModule, BeforeEachErrorModule],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'org';
}
