import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivationLinkPage } from './activation-link.page';

describe('ActivationLinkPage', () => {
  let component: ActivationLinkPage;
  let fixture: ComponentFixture<ActivationLinkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivationLinkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivationLinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
