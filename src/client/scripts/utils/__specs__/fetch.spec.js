import {getJson} from '../fetch';

// must be imported after fetch
import fetchMock from 'fetch-mock';

describe('fetch utils', () => {
    const jsonEndpoint = 'http://www.example.org/json';

    afterEach(fetchMock.restore);

    it('should return good response', (done) => {
        fetchMock.mock(jsonEndpoint, {
            goodKey: 'goodValue'
        });

        getJson(jsonEndpoint)
            .then(data => {
                expect(fetchMock.called(jsonEndpoint)).toBe(true);
                expect(data.goodKey).toEqual('goodValue');
                done();
            })
            .catch(done.fail);
    });

    it('should fail bad response', (done) => {
        fetchMock.mock(jsonEndpoint, {
            status: 400,
            body: {
                badKey: 'badValue'
            }
        });

        getJson(jsonEndpoint)
            .then(done.fail)
            .catch(error => {
                expect(fetchMock.called(jsonEndpoint)).toBe(true);

                error.response.json().then(data => {
                    expect(data.badKey).toEqual('badValue');
                    done();
                });
            });
    });
});