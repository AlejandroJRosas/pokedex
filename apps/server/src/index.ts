import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { serve, setup } from 'swagger-ui-express';
import { swaggerSpec } from './core/swagger';

import { PORT } from './config';
import { router } from './core/_routes';
import { cache } from './utils/cache-config';

// App Declaration
const app = express();

// Settings
app.set('port', PORT != null || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(cache);

// Routes
app.use('/', router);
app.use('/docs', serve, setup(swaggerSpec));

// Starting the server
app.listen(app.get('port'), () => {
  console.log('[Backend] Server on port', app.get('port'));
  console.log(
    `Swagger Online! - Visit http://localhost:${app.get('port')}/docs`
  );
});
