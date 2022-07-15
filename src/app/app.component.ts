import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service';
import { DummyApiService } from './dummy-api.service';
import { DataApi } from './apiData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularJS_Practice';
  currentVal = ""
  imgSrc = "../assets/images/ami-parekh.jpeg"; // Interpolation & Property Binding-------------

  print(val: string) {
    console.log(val);
    this.currentVal = val;
  }
  show = 'yes'; // If Else--------
  color = 'blue'; //Switchcase------
  name = 'bruce';
  disabledBox = true;
  enabledBox() {
    this.disabledBox = false;
  }

  // For Loop--------
  Data = ['1 Ami', '2 Krushna', '3 Himani'];
  DataObj = [
    {
      name: 'Ami',
      age: 29
    },
    {
      name: 'Krushna',
      age: 27
    },
    {
      name: 'Himani',
      age: 31
    }
  ]

  // Form------------
  getUserValue(value: any) {
    console.log(value);
  }

  // Style Binding---------------
  styleColor = 'orange';
  err = true;

  updateColor() {
    this.styleColor = 'pink';
  }

  // Pass data from parent AppComponent to child UserComponent
  parentData = [
    {
      name: 'Kalpana',
      age: 56
    },
    {
      name: 'Nilesh',
      age: 57
    }]

  data = "";
  // Pass Data from child to parent
  parentComponent(data: any) {
    console.log(data);
    this.data = data;
  }

  // transfer data using pipe
  pipeString = "pipe string";
  pipeDate = Date.now();
  pipeSlice = "hello ami"
  pipeCurrency = 10

  // Service used for getting data
  fullname = '';
  apiData: DataApi[] = [];
  constructor(private user: UserDataService, private dummy: DummyApiService) {

    console.log(this.user.getData());
    let data = this.user.getData();
    this.fullname = data.name;

    // Service used for getting data from API 
    this.dummy.getApiData().subscribe(apidata => {
      console.log('Api data', apidata);
      this.apiData = apidata;
    })
  }

} 
