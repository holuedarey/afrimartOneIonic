import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BecomeSupplierPage } from './become-supplier.page';

describe('BecomeSupplierPage', () => {
  let component: BecomeSupplierPage;
  let fixture: ComponentFixture<BecomeSupplierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeSupplierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BecomeSupplierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
