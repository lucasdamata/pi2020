import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapsdetailPage } from './mapsdetail.page';

describe('MapsdetailPage', () => {
  let component: MapsdetailPage;
  let fixture: ComponentFixture<MapsdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapsdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
