import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeparatedModulePage } from './separated-module.page';

describe('SeparatedModulePage', () => {
  let component: SeparatedModulePage;
  let fixture: ComponentFixture<SeparatedModulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeparatedModulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeparatedModulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
