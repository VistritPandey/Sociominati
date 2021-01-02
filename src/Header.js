import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import logo from "./Logo.jpg";

function Header() {
  const user = useSelector(selectUser);
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search won't work :(" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="Friends" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={user.photoUrl} title="me" />
      </div>
    </div>
  );
}

export default Header;
