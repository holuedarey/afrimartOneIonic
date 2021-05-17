import { Component, OnInit } from '@angular/core';
import { xModel } from '../models/all.model';
import { Observable, interval, timer } from 'rxjs';
import { takeUntil, finalize, take } from 'rxjs/operators';
import { DummyService } from '../providers/dummy.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  xData: xModel;
  xDataInterval: Observable<any>;
  xAvailable = true;
  xCountdown = 0;
  counter: any = 1;
  isDefaultAddress = true;
  constructor(
    private dummyService: DummyService
  ) { }

  ngOnInit() {
    this.showcaseShellSimpleFetch(3);
  }
  showcaseShellSimpleFetch(countdown: number): void {
    // Assign an (empty / null) value to the shell object to restore it's 'loading' state
    this.xData = null;

    // Prevent rage clicks on the 'Fetch more Data' button
    this.xAvailable = true;

    // Start a countdown and an interval before executing the fetch function
    this.xCountdown = countdown;
    this.xDataInterval = interval(1000);

    // Start a countdown to showcase the shell elements animations for a few seconds before the data get's fetched into the shell object
    const timer$ = timer(countdown * 1000);
    // When timer emits after X seconds, complete source
    this.xDataInterval
      .pipe(
        takeUntil(timer$),
        finalize(() => this.xAvailable = true
        )
      )
      .subscribe({
        next: () => {
          this.xCountdown--;
        },
        complete: () => {
          this.xCountdown = 0;
          // Once the countdown ends, fetch data using the HttpClient
          this.dummyService.getSimpleDataSource()
            .pipe(
              take(1) // Force Observable to complete
            ).subscribe(val => {
              // console.log('Fetching shell data using the HttpClient', val);
              this.xData = val;
            });
        }
      });
  }
  getSubCat(){
    console.log("getSubCat")
  }
  viewAllSubCats(){
    // console.log("viewAllSuatsbC")
  }
}
