import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UserDataService } from '../app/core/services/user-data/user-data.service';
import { DummyApiService } from '../app/core/services/dummy-api/dummy-api.service';
import { DataApi } from './shared/models/apiData';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';

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

  // Service used for getting data  // Lazy Load components LazyloadAdmin & LazyloadUser

  fullname = '';
  apiData: DataApi[] = [];
  constructor(private user: UserDataService, private dummy: DummyApiService, private viewContainer: ViewContainerRef, private cfr: ComponentFactoryResolver) {

    console.log(this.user.getData());
    let data = this.user.getData();
    this.fullname = data.name;

    // Service used for getting data from API 
    this.dummy.getApiData().subscribe(apidata => {
      console.log('Api data', apidata);
      this.apiData = apidata;
    })
  }

  // Lazy Load components LazyloadAdmin & LazyloadUser

  async lazyloadAdmin() {
    this.viewContainer.clear();

    const { LazyloadadminComponent } = await import('./shared/components/lazyloadadmin/lazyloadadmin.component');
    this.viewContainer.createComponent(this.cfr.resolveComponentFactory(LazyloadadminComponent)
    )
  }

  async lazyloadUser() {
    this.viewContainer.clear();

    const { LazyloaduserComponent } = await import('./shared/components/lazyloaduser/lazyloaduser.component');
    this.viewContainer.createComponent(this.cfr.resolveComponentFactory(LazyloaduserComponent)
    )
  }


  // Reactive form validation

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15)])
  })

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  getReactiveFormValue() {
    console.log(this.loginForm.value);
  }

  // Prefilled Form Data
  prefilledData = {
    fullname: 'Danish Paul',
    address: '225 Van Horne Avanue',
    mobile: 1234567891,
    emailId: 'danishpaul@gmail.com'
  }

  savePrefilledData(preData: any) {
    console.log(preData);
  }
} 
