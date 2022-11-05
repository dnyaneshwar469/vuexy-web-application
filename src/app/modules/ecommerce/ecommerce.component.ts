import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/shared/service/user.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";
import { AuthService } from 'src/app/shared/service/auth.service';
import { map } from 'rxjs/operators'

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  yaxis: ApexYAxis | ApexYAxis[];
  fill: ApexFill;
};
@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {
  getUserName: any = [];
  usersList: any = [];
  getUserLocal:any;

  @ViewChild("chart") chart:any | ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  data = [
    {
      name: "PRODUCT A",
      type: "column",
      data: [44, 55, 41, 67, 22]
    },
    {
      name: "PRODUCT B",
      type: "column",
      data: [13, 23, 20, 8, 13]
    },
  ];

  constructor(
    private http: HttpClient,
    private userService: UsersService,
    private authService: AuthService
  ) { 
    this.chartOptions = {
      series: [...this.data],
      chart: {
        type: "line",
        height: 250,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        // categories: [
        //   "01/2011",
        //   "02/2011",
        //   "03/2011",
        //   "04/2011",
        //   "05/2011"
        // ]
      },
      yaxis: [
        {
          show: false,
          opposite: true,
          title: {
            text: "PRODUCT c"
          }
        }
      ],
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };
  }

  ngOnInit(): void {
    // this.userService.getUser().subscribe((res:any) => {
    //   this.getUserName = res.find((a: any)=>{
    //     this.getUserLocal = JSON.parse(localStorage.getItem('authToken')!)
    //     console.log(this.getUserLocal.email)
    //     if( a.email === this.getUserLocal.email && a.password === this.getUserLocal.password){
    //       return a.userName;
    //     }
    //   });
    //   console.log(this.getUserName);
    // })

    this.authService.signin()
    .pipe(map((responseData: any) =>{
      // const usersList = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          this.usersList.push({...responseData[key], id: key})
        }
      };
      return this.usersList;
    }))
    .subscribe((responseData:any) => {
        this.getUserName = responseData.find((a: any)=>{
          this.getUserLocal = JSON.parse(localStorage.getItem('authToken')!)
          console.log(this.getUserLocal.email)
          if( a.email === this.getUserLocal.email && a.password === this.getUserLocal.password){
            return a.userName;
          }
        });
        console.log(responseData);
        
      })
  }
}
