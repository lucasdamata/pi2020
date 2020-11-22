import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelecionarCulturaPage } from './selecionar-cultura.page';

describe('SelecionarCulturaPage', () => {
  let component: SelecionarCulturaPage;
  let fixture: ComponentFixture<SelecionarCulturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecionarCulturaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelecionarCulturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
