import { compute, computeDemo } from './compute';
import axios from 'axios';
import {jest} from "@jest/globals";

jest.mock('axios');

describe('compute()', () => {
    it('should return a valid IPFS CID', async () => {
        const train_script = 'linear-regression.ipynb';
        const cid = 'Qme1HnwLHVzRxra7mT5gRkG7WbyE4FhnGFn9inETSj33Hw';

        axios.post.mockResolvedValue({
            data: {
                cid,
            },
        });

        const result = await compute(train_script, cid);

        expect(result).toBe(cid);
    });
});

describe('computeDemo()', () => {
    it('should return a valid IPFS CID', async () => {
        const train_script = 'linear-regression.ipynb';
        const input_archive = '/app/samples/sample_v3/sample_v3.zip';

        axios.post.mockResolvedValue({
            data: {
                cid: 'QmYw4384z3x26j165x9968n65362y53689h53487987',
            },
        });

        const result = await computeDemo(train_script, input_archive);

        expect(result).toBe('QmYw4384z3x26j165x9968n65362y53689h53487987');
    });
});
