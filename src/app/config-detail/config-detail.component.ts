import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {Config} from '../model/config';
import {ConfigService} from '../config.service';

@Component({
    selector: 'app-config-detail',
    templateUrl: './config-detail.component.html',
    styleUrls: ['./config-detail.component.less']
})
export class ConfigDetailComponent implements OnInit {

    @Input()
    config: Config;

    constructor(
        private configService: ConfigService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.configService.getConfig(+params['id']))
            .subscribe(config => this.config = config);
    }
}
