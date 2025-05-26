import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KodaCraftAboutComponent } from './koda-craft-about.component';

describe('KodaCraftAboutComponent', () => {
  let component: KodaCraftAboutComponent;
  let fixture: ComponentFixture<KodaCraftAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KodaCraftAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KodaCraftAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
