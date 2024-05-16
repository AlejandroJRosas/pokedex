import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: { title: 'Pokedex API Documentation', version: '1.0.0' }
  },
  apis: []
};

export const swaggerSpec = swaggerJSDoc(options);
