import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  values: any;
  url = 'http://localhost:5000/api/values';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    console.log('Init data-->');
    this.postTest();
    // this.getValues();
  }

  getValues() {


    this.http.get(this.url).subscribe(
      res => {
        this.values = res;
      }, error => { console.log(error);
        });

  }


  postTest() {
    console.log('desde api result--->');
    // const url = 'http://localhost:5000/api/value';
    const testData = {
          'VehicleId' : 12,
          'Type' : '',
          'ManufacturerNameShort' : 'ASDASDADS',
          'Price' :  10
        };


    const body = JSON.stringify(testData);
    console.log('desde api result--->', testData);
    console.log('desde api result--con ->', JSON.stringify(testData));

    // let dataFormat = JSON.stringify(testData);
    const headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });

      return this.http.post(this.url, body, {headers: headerOptions})
            .subscribe( res => {
              this.values = res;
                console.log('desde la api debe venir --->',  res);
                console.log('desde la api debe venir ---  this.value>',  this.values);
                console.log('desde la api debe venir ---  this.value-vehicleId>',  this.values.vehicleId);
                console.log('desde la api debe venir ---  this.value-returnCode>',  this.values.returnCode);

              if (this.values.returnCode) {
                console.log('VALIDO');
              } else {
                console.log('INVALIDO');

              }

      }, error => { console.log(error);
      });


  //  .pipe(
  //     map((res: any) => {
  //       const result = res;
  //       console.log('desde api result--->', result);
  //     })
  //   );

  }

}
