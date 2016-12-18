import {RequestHeader} from './request-header';
import {ResponseHeader} from './response-header';
import {Filter} from './filter';

export class Config {
    id?: number;
    name: string;
    requestHeaders?: RequestHeader[];
    responseHeaders?: RequestHeader[];
    filters?: Filter[];
}
