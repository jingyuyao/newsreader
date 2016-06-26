/* global describe, it, expect */

import AbstractApi from '../abstract';

describe('Base api', () => {
    it('should not implement anything', () => {
        const api = new AbstractApi();
        expect(api.defaultFeed).toThrow();
    });
});