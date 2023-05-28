import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkViewPageComponent } from './artwork-view-page.component';

describe('ArtworkViewPageComponent', () => {
  let component: ArtworkViewPageComponent;
  let fixture: ComponentFixture<ArtworkViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtworkViewPageComponent]
    });
    fixture = TestBed.createComponent(ArtworkViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
