import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app/services/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'fhir-app-test';
  
showMe:boolean=true;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getPatients().subscribe(
      data => {
        console.log(data);
      }
    )
  }


  on_submit()
  {
    this.showMe=!this.showMe
  }



}


