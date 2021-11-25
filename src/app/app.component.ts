import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  public title = 'crm';
  private obs = new Observable((listX) => {
    listX.next(Math.random());
  });
  private subj = new Subject();
  private behav = new BehaviorSubject(0);
  private sub!: Subscription;

  constructor() {
    // this.obs.subscribe((data) => console.log(data));
    // this.obs.subscribe((data) => console.log(data));
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next('toto');
    // this.subj.next(Math.random());
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next('toto3');
    // this.behav.subscribe((data) => console.log(data));
    // this.behav.next(1);
    // this.behav.next(2);
    // this.behav.subscribe((data) => console.log(data));
    // this.sub = this.behav.subscribe((data) => console.log(data));
    // this.behav.next(3);
    // this.behav.subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
