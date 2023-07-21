import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input()
  name: string = '';
  panelOpenState: boolean = false;
  loading: boolean = true;
  is_dead: boolean = true;
  status: string = '...';
  icon: string | undefined;

  constructor(private http:HttpClient) {
  }

  public getInfo() {
    this.loading = true;
    const response = this.http.get<boolean>('http://localhost/api/is_dead/?name=' + this.name);
    lastValueFrom(response).then((is_dead) => {
      this.loading = false;
      this.is_dead = is_dead;
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
