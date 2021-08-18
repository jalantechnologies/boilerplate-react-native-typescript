import * as React from 'react';

import { AuthService, AuthServiceImpl} from '@services';

import {AppDependenciesProps} from './dependencies.props';

const authService: AuthService = new AuthServiceImpl();


export const getDependencies = (): AppDependenciesProps => {
  return {
    authService,
  };
}

const DIContext = React.createContext<AppDependenciesProps>(getDependencies());

export default DIContext;
