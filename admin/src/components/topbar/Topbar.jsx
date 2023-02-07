import React from "react";
import "./topbar.css";
// import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import {IoMdNotificationsOutline} from "react-icons/io";
import {IoSettings} from "react-icons/io5";
import {MdModeNight, MdOutlineLightMode} from "react-icons/md";
export default function Topbar({theme, selectTheme}) {
  return (
    <div className="topbar shadow-lg">
      <div
        className={
          theme === "black"
            ? "topbarWrapper bg-zinc-800 text-white"
            : "topbarWrapper"
        }
      >
        <div className="topLeft">
          <span className={theme === "black" ? "logo text-white" : "logo"}>
            MELISSIA
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            {theme === "black" ? (
              <MdOutlineLightMode
                size={25}
                onClick={() => selectTheme("white")}
                color={theme === "black" ? "white" : "black"}
              />
            ) : (
              <MdModeNight
                size={25}
                onClick={() => selectTheme("black")}
                color={theme === "black" ? "white" : "black"}
              />
            )}
          </div>
          <img src="/person_2.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
/* 

<NotificationsNone />
<Language />
<Settings />

*/
/* 

<div className="topbarIconContainer">
            <span className="topIconBadge">2</span>
            <IoMdNotificationsOutline
              size={20}
              color={theme === "black" ? "white" : "black"}
            />
          </div>
          <div className="topbarIconContainer">
            <span className="topIconBadge">2</span>
            <IoSettings
              size={20}
              color={theme === "black" ? "white" : "black"}
            />
          </div>

*/
