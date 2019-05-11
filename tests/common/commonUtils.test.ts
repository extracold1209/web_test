import { expect } from 'chai';
import _ from 'lodash';
import utils from '../../src/common/commonUtils';

describe('projection', function () {
    it('많은 값에 적은 값 넣기', function () {
        const original = {
            a: 'aa',
            b: 'bb',
            c: 'cc',
            d: 'dd',
        }

        const source = {
            a: 'modified_aa',
            c: 'modified_cc',
        }

        const result = utils.projection(original, source);
        expect(_.isEqual(result, {
            a: 'modified_aa',
            c: 'modified_cc',
        })).to.be.true;
    });
});