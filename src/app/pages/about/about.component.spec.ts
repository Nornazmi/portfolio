import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
  });

  it('uses bundled skill icons instead of a third-party icon service', () => {
    const imageElements: NodeListOf<HTMLImageElement> = fixture.nativeElement.querySelectorAll('img');
    const iconSources = Array.from(imageElements, (image) => image.getAttribute('src'));

    expect(iconSources).toHaveSize(16);
    expect(iconSources.every((source) => source?.startsWith('assets/icons/skills/'))).toBeTrue();
  });
});
