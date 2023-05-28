import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkListPageComponent } from './artwork-list-page.component';

describe('ListComponent', () => {
  let component: ArtworkListPageComponent;
  let fixture: ComponentFixture<ArtworkListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtworkListPageComponent],
    });
    fixture = TestBed.createComponent(ArtworkListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
