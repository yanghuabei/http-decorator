import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import {Config} from './model/config';
import {RequestHeader} from './model/request-header';

@Injectable()
export class ConfigService {

    private configsUrl: string = 'api/configs';

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    getConfigs(): Promise<Config[]> {
        return this.http.get(this.configsUrl)
            .toPromise()
            .then(response => response.json().data as Config[])
            .catch(this.handleError);
    }

    getConfig(id: number): Promise<Config> {
        const url = `${this.configsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Config)
            .catch(this.handleError);
    }

    create(config: Config): Promise<Config> {
        return this.http
            .post(this.configsUrl, config, {headers: this.headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<Config> {
        return this.http
            .delete(`${this.configsUrl}/${id}`, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    update(config: Config): Promise<Config> {
        return this.http
            .put(`${this.configsUrl}/${config.id}`, JSON.stringify(config), {headers: this.headers})
            .toPromise()
            .then(() => config)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
