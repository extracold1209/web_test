import { expect } from 'chai';
import _ from 'lodash';
import utils from '../../src/common/commonUtils';

describe('projection', function () {
    it('포함되는 경우', function () {
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

    it('겹치는 경우', function() {
        const original = {
            a: 'aa',
            b: 'bb',
            c: 'cc',
        }

        const source = {
            b: 'modified_bb',
            c: 'modified_cc',
            d: 'dd',
        }
        const result = utils.projection(original, source);
        expect(_.isEqual(result, {
            b: 'modified_bb',
            c: 'modified_cc',
        })).to.be.true;
    })
});