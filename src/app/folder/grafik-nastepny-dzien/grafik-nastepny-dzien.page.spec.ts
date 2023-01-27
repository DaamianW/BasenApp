import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrafikNastepnyDzienPage } from './grafik-nastepny-dzien.page';

describe('GrafikNastepnyDzienPage', () => {
  let component: GrafikNastepnyDzienPage;
  let fixture: ComponentFixture<GrafikNastepnyDzienPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafikNastepnyDzienPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrafikNastepnyDzienPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
