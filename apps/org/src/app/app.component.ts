import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AbetestModule } from '@org/abetest';

@Component({
  standalone: true,
  imports: [RouterModule, AbetestModule],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'org';
}
