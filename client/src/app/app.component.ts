import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  datingApp = 'The Dating App';
  users:any;
  private http = inject(HttpClient);
 
  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
      this.http.get<any>("http://localhost:5098/api/users").subscribe(res => {
      this.users = res;
    });
  }
}
