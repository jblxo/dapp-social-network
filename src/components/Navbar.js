import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Identicon from 'identicon.js';

const Navbar = ({ account }) => {
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    if (account !== '') {
      const identicon = new Identicon(account, 30).toString();
      setAvatar(`data:image/png;base64,${identicon}`);
    }
  }, [account]);

  return (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a
        className="navbar-brand col-sm-3 col-md-2 mr-0"
        href="http://www.dappuniversity.com/bootcamp"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dapp University
      </a>
      {account && (
        <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
          <small className="text-secondary">
            <small id="account">{account}</small>
          </small>
          <img
            src={avatar}
            alt="User's avatar"
            className="ml-2"
            width="30"
            height="30"
          />
        </li>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  account: PropTypes.string.isRequired
};

export default Navbar;
