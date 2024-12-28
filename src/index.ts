import { Hono } from 'hono';
import logiverse from './logiverse';
import { cors } from 'hono/cors';

const app = new Hono()
    .use(cors({ origin: '*' }))
    .get('/', (c) =>
        c.html(
            '<meta name="viewport" content="width=device-width, initial-scale=1.0" /><link rel="stylesheet" href="https://svenlaa.com/style.css" /><title>api.svenlaa.com</title><h1><a style="--color:var(--stone-950);text-decoration:none" href="https://github.com/Svenlaa/api.svenlaa.com">api.svenlaa.com</a></h1>Why are you here? Visit <a href="https://svenlaa.com">svenlaa.com</a> for the site'
        )
    );

app.route('/logiverse', logiverse);

export default app;
