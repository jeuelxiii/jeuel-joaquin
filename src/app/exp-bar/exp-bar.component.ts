import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-exp-bar',
  templateUrl: './exp-bar.component.html',
  styleUrls: ['./exp-bar.component.scss']
})
export class ExpBarComponent {
lessThan = '<';
greaterThan = '>';
slash = '/';
bgMobile = './assets/jeuel600.jpg';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
