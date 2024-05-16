process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export default {
  api: {
    prefix: '/api/v1',
  },
  port: process.env.PORT || '4900'
}