import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cleanup1Page } from './cleanup1.page';

describe('Cleanup1Page', () => {
  let component: Cleanup1Page;
  let fixture: ComponentFixture<Cleanup1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cleanup1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cleanup1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
