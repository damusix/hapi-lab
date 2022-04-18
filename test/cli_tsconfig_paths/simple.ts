import { expect } from '@hapi/code';
import * as _Lab from '../../test_runner';

import { add } from 'nested/api';


const { describe, it } = exports.lab = _Lab.script();

describe('Test CLI', () => {

    it('adds two numbers together', () => {

        expect(add(1, 1)).to.equal(2);
    });

    it('subtracts two numbers', () => {

        expect(add(2, - 2)).to.equal(0);
    });

    it('should have included a global via require option', () => {

        expect(global.shouldExist).to.be.true();
    });
});
