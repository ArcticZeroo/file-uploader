import Koa from 'koa';

export type Middleware = (app: Koa) => void;