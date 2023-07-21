import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { env } from './envs/env'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loading: boolean = true;
  people: String[] = [];

  constructor(private http:HttpClient) {
  }

  public getPeople() {
    this.loading = true;
    const response = this.http.get<String[]>(env.back_root + 'api/people/');
    lastValueFrom(response).then((people) => {
      this.loading = false;
      this.people = people;
    })
  }

  ngOnInit() {
    this.getPeople();
  }

}
