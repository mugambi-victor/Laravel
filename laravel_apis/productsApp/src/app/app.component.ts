import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
 schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService], // Provide services here
})
export class AppComponent {
  name = 'victor';
}
