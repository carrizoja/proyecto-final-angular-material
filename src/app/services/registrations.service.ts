import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { Registration } from '../models/registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationsService {
  private registrations = new BehaviorSubject<Registration[]>([
    new Registration (1, 'José', 'Carrizo','23023', 'Maths'),
    new Registration (2, 'Sofia', 'Ceria','17342', 'Physics'),
    new Registration (3, 'Walter', 'Leguizamón','23423', 'Chemistry'),
  ]);
  public registrations$: Observable<Registration[]>

  constructor() { 
    this.registrations$ = this.registrations.asObservable();
  }

  addRegistration(newRegistrationData: Omit<Registration, 'id'>): void {
    this.registrations.pipe(take(1)).subscribe((registrations) => {
      const lastId = registrations[registrations.length - 1]?.id || 0;
      this.registrations.next([...registrations, new Registration(lastId + 1, newRegistrationData.firstName, newRegistrationData.lastName, newRegistrationData.courseCode, newRegistrationData.courseName)])
    })
  }

  editRegistration(id: number, data: Partial<Registration>): void {
    this.registrations.pipe(take(1)).subscribe((registrations) => {
      this.registrations.next(registrations.map(
        (r) => r.id === id
        ? new Registration (
          r.id,
          data.firstName || r.firstName,
          data.lastName || r.lastName,
          data.courseCode || r.courseCode,
          data.courseName || r.courseName
        )
        : r
      )
      )
    })
  }

  removeRegistration(id: number): void {
    this.registrations.pipe(take(1)).subscribe((registrations) => {
      this.registrations.next(registrations.filter((r) => r.id !== id))
    })
  }

  getRegistration(id: number): Observable<Registration | null> {
    return this.registrations$.pipe(
      take(1),
      map((registrations) => registrations.find((reg) => reg.id === id) || null)
    )
  }

}
