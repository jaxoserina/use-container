import { container } from 'typescript-nodejs-ioc';
export * as client  from './controllers/client';

const client = container.resolve('client');
const name = client.getClient(12);
console.log(client);
console.log(name);
console.log(container.providers);