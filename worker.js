import { parentPort } from 'worker_threads';

for (let i = 0; i < 10000000000; i++) {};

parentPort.postMessage('I finished counting to 10000000000 using worker threads.');