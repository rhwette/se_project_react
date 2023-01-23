import React from 'react';
import './SideBar.css';
// import '../Profile.css';
import avatarPath from '../../../images/avatar-default2.jpg';
import { nameOfPerson } from '../../../utils/constants';

function SideBar(props) {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatarPath} alt="avatar" />
      <p className="sidebar__text"> {nameOfPerson}</p>
    </div>
  );
}

export default SideBar;
