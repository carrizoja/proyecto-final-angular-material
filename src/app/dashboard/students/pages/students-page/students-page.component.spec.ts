import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentsPageComponent } from './students-page.component';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { StudentsService } from '../../services/students.service';
import { StudentsServiceMock } from 'src/app/mocks/students.service.mock';
fdescribe('StudentsPageComponent', () => {
  let component: StudentsPageComponent;
  let fixture: ComponentFixture<StudentsPageComponent>;
  let studentsService: StudentsService;
  let spyLoadStudents: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        StudentsPageComponent

       ],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        MatDialog,
        MatDialogModule,
        {
          provide: StudentsService,
          useClass: StudentsServiceMock
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsPageComponent);
    component = fixture.componentInstance;
    studentsService = TestBed.inject(StudentsService)
    spyLoadStudents = spyOn(studentsService, 'getStudentsFromAPI').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load students at start', () => {
    component.ngOnInit();
    expect(spyLoadStudents).toHaveBeenCalled();

  })
});
