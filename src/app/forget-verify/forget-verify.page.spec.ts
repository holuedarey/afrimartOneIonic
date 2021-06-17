import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForgetVerifyPage } from './forget-verify.page';

describe('ForgetVerifyPage', () => {
  let component: ForgetVerifyPage;
  let fixture: ComponentFixture<ForgetVerifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetVerifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForgetVerifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
