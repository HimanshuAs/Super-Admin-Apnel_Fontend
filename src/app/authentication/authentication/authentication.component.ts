import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  currentRoute: any;
  // @Output() loggedinFlag:EventEmitter<boolean>
  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
    console.log(this.currentRoute)
  }

}
