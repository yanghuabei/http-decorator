/* tslint:disable:no-unused-variable */
import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import {
    By
} from '@angular/platform-browser';
import {
    DebugElement
} from '@angular/core';

import {
    ConfigDetailComponent
} from './config-detail.component';

describe('ConfigDetailComponent', () => {
    let component: ConfigDetailComponent;
    let fixture: ComponentFixture < ConfigDetailComponent > ;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [ConfigDetailComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfigDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
