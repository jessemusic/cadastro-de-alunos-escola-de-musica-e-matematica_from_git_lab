import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


    constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

     onTelaPrincipal() {
    this.router.navigate(['/'], {relativeTo: this.route})
  }

    onTelaSobre() {
    this.router.navigate(['sobre'], {relativeTo: this.route})
  }


}
