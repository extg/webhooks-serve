import express from 'express';
import bodyParser from 'body-parser';
import morgan, { TokenIndexer } from 'morgan';

import { name as NAME } from '../package.json';

// TODO: нужно ли использовать bodyToString?
// https://github.com/sirrodgepodge/morgan-body/blob/master/index.js#L134
// morgan.token('req[body]', (req, res) => JSON.stringify(req.body) )
// const logger = (morgan(':method :url :req[body] :status :res[content-length] - :response-time ms')
const logger = morgan(
  (tokens: TokenIndexer, req: express.Request, res: express.Response) =>
    `${req.method} ${req.url} ${res.statusCode} ${JSON.stringify(req.body)} `,
);

// console.log(morgan(':method :url :status :res[content-length] - :response-time ms').toString())

const app = express();
const NODE_PORT = process.env.NODE_PORT || 5000;

export const run = async () => {
  app.use(bodyParser.json());
  app.use(logger);
  app.all('*', (req, res) => {
    res.send('ok');
  });

  app.listen(NODE_PORT, () => console.log(`${NAME} listening on port ${NODE_PORT}!`));
};

if (require.main === module) {
  run();
}
