import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the hero Windstorm', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Windstorm');
  });
});
