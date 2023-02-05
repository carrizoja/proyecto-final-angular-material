import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AppState } from 'src/app/core/models/app-state.model';
import { User } from 'src/app/models/user.model';
import { authenticatedUserSelector } from '../../../auth/store/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  @Output() toggleSidebar = new EventEmitter()

 public user: Observable<User | null>
 
  constructor(private readonly store: Store<AppState>, public readonly authService: AuthService) {
  this.user = this.store.select(authenticatedUserSelector)
  }
  ngOnDestroy(): void {
    
  }
}
