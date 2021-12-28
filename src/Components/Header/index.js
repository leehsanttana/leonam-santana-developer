import React from 'react';
import * as C from './styles';
// import Logo from '../../Assets/ls-logo.png';

const Header = () => {
  return (
    <C.Header>
      <C.Brand>{/* <img src={Logo} /> */}Logo</C.Brand>
      <C.Nav>
        <ul>
          <li>
            {' '}
            <a href="">home</a>{' '}
          </li>
          <li>
            {' '}
            <a href="">sobre</a>{' '}
          </li>
          <li>
            {' '}
            <a href="">portfolio</a>{' '}
          </li>
          <li>
            {' '}
            <a href="">contatos</a>{' '}
          </li>
        </ul>
      </C.Nav>
    </C.Header>
  );
};

export default Header;
