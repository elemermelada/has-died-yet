import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input()
  name: string = '';
  loading: boolean = true;
  is_dead: boolean = true;

  constructor(private http:HttpClient) {
  }

  public getInfo() {
    this.loading = true;
    const response = this.http.get<boolean>('http://localhost/api/is_dead/?name=' + this.name);
    lastValueFrom(response).then((is_dead) => {
      this.loading = false;
      this.is_dead = is_dead;
    })
  }

  ngOnInit() {
    this.getInfo();
  }

}
