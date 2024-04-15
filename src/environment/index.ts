import {DevEnvironment} from './dev.env';
import {ProdEnvironment} from './prod.env';

export interface Environment {
  base_api_url: string;
}
export function getEnvVariable(): Environment {
  if (process.env.NODE_ENV === 'development') {
    return DevEnvironment;
  } else {
    return ProdEnvironment;
  }
}