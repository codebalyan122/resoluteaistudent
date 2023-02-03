import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const Aside = ({}) => {
  return (
    <div className="aside-menu">
      <div className="people-outline aside">
        <Link to="/">
          <PeopleOutlineIcon />
          <Typography ml={2}>Add Student</Typography>
        </Link>
      </div>
      <div className="manage-account aside">
        <Link to="/students">
          <ManageAccountsRoundedIcon />
          <Typography ml={2}>Manage Students</Typography>
        </Link>
      </div>
      <div className="manage-account aside">
        <LogoutRoundedIcon />
        <Typography ml={2}>Logout</Typography>
      </div>
    </div>
  );
};

export default Aside;
