import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

interface isDead {
  is_dead: boolean
  date: string
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input()
  name: string = '';

  panelOpenState: boolean = false;
  
  is_dead: boolean|undefined|null;
  date: string|undefined|null;
  
  loading: boolean = true;
  status: string = '...';
  icon: string | undefined;

  constructor(private http:HttpClient) {
  }

  public getInfo() {
    this.loading = true;
    const response = this.http.get<isDead>('http://localhost/api/is_dead/?name=' + this.name);
    lastValueFrom(response).then((response) => {
      this.loading = false;
      this.is_dead = response.is_dead;
      this.date = response.date
      if (response.date === null) {
        this.date = "Not yet!";
      }
      if (response.is_dead === null) {
        this.date = "???";
      }
      this.createStatus();
    })
  }

  public createStatus() {
    switch (this.is_dead) {
      case true:
        this.status = "is dead";
        this.icon = 'close';
        break;
      case false:
        this.status = "is alive";
        this.icon = 'check';
        break;
      case null:
        this.status = "is unknown";
        this.icon = 'question_mark';
        break;
    }
  }

  ngOnInit() {
    this.getInfo();
  }

}
