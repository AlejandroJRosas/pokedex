import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { serve, setup } from 'swagger-ui-express';
import { router } from 'core/_routes';
import { swaggerSpec } from 'core/swagger';
import { cache } from 'shared/utils/cache-config';
import { PORT } from 'shared/config';

// App Declaration
const app = express();

// Settings
app.set('port', PORT || 3000);

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
