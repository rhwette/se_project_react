import React from 'react';
import './SideBar.css';
import '../Profile.css';
import avatarPath from '../../../images/avatar-default2.jpg';

function SideBar(props) {
  //   return <div className="sidebar">console.log('inside SideBar');</div>;
  return (
    <div>
      {/* ('SideBar 12345') */}
      <div className="sidebar__avatar">
        <img src={avatarPath} alt="avatar" />
        <p className="sidebar__text"> {props.nameProfile}</p>
      </div>
    </div>
  );
}

export default SideBar;
