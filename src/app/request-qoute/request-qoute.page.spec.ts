import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestQoutePage } from './request-qoute.page';

describe('RequestQoutePage', () => {
  let component: RequestQoutePage;
  let fixture: ComponentFixture<RequestQoutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestQoutePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestQoutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
