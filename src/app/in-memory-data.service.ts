import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let configs = [
            {
                id: 1,
                name: 'fuck',
                requestHeaders: [
                    {
                        name: 'cookie',
                        value: 'fuck angular-cli'
                    }
                ]
            }
        ];
        return {configs};
    }
}
