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
  people: any[] = [];
  padding: number = 20;

  constructor(private http:HttpClient) {
  }

  public getPeople() {
    this.loading = true;
    const response = this.http.get<any>(env.back_root + 'api/people/');
    lastValueFrom(response).then((people) => {
      this.loading = false;
      this.people = Object.keys(people).map((key) => {return {name: key, url: people[key]}});
    })
  }

  ngOnInit() {
    const aspectRatio = window.innerWidth / window.innerHeight;
    this.padding = Math.max((aspectRatio - 9/16) / (16/9 - 9/16) * 15 + 5, 5)
    this.getPeople();
  }

}
