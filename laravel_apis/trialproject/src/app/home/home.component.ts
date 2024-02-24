import { Component } from '@angular/core';
//for every template that contains links to other pages, you have to 
// include the RouterModule. eg my home.component.html has a link to
// loginpage. thats why i included router module here.
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
