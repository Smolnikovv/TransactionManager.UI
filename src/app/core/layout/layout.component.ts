import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor(private route:Router) {
    if(localStorage.getItem('token') == null)
    {
      route.navigateByUrl('/login');
    }
    
  }
  onLogout(){
    localStorage.removeItem('token');
    this.route.navigateByUrl('/login');
  }
}
