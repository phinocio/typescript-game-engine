import { assert } from 'chai';

describe('Number', () => {

	it('is-a-number', () => {
		assert.typeOf(1, 'number');
	});
});
