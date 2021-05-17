import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactMessagePage } from './contact-message.page';

describe('ContactMessagePage', () => {
  let component: ContactMessagePage;
  let fixture: ComponentFixture<ContactMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
