/**
 * app
 * @author Ashok Vishwakarma <akvlko@gmail.com>
 * app config
 */

/**
 * env
 * 
 * env utility
 */
import env from '../utility/env';

/**
 * IndexSignature
 * 
 * Type interface for IndexSignature
 */
import { IndexSignature } from '../../types';

const app: IndexSignature<any> = {
  ENV: env('ENV', 'development'),
  NAME: env('NAME', 'Workshop'),
  VERSION: env('VERSION', '1.0.0'),
  PROTOCOL: env('PROTOCOL', 'http'),
  HOST: env('HOST', '0.0.0.0'),
  PORT: env('PORT', 4000),
  SECRET: env('SECRET', '1DA3A9C16A4665194D64EDDF31624'),
  SSL_KEY: env('SSL_KEY', ''),
  SSL_CERT: env('SSL_CERT', '')
};

app['APP_URL'] = `${app.PROTOCOL}://${app.HOST}:${app.PORT}/`;

export default app;