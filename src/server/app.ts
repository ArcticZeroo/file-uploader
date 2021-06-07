import json from 'koa-json';
import Koa from 'koa';

const app = new Koa();

app.use(json());

export { app };