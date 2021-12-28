import React from 'react';
import * as C from './styles';

const CallToAction = ({ children, href }) => {
  return <C.CallToAction href={href}>{children}</C.CallToAction>;
};

export default CallToAction;
