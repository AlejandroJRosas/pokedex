import ExpressExpeditious from 'express-expeditious';

export const cache = ExpressExpeditious({
  namespace: 'expresscache',
  defaultTtl: '1 hour'
});
