import React from "react";
import { useNavigate } from "react-router-dom";
import { TfiSearch } from "react-icons/tfi";
import { TfiViewGrid } from "react-icons/tfi";
import { TfiWidgetAlt } from "react-icons/tfi";
import { TfiUser } from "react-icons/tfi";
function Nav() {

  return (
    <>
      <nav className="nav-bar">
        <li className="left">
          <button>Prime Video</button>
        </li>
        <li  className="left">
          <button>Home</button>
        </li>
        <li  className="left">
          <button>Movies</button>
        </li>
        <li  className="left">
          <button>TV Shows</button>
        </li>
        <li  className="left">
          <button>Live TV</button>
        </li>
        <li  className="left">
          <button>Prime Logo</button>
        </li>
        <li  className="left">
          <button>Subscription</button>
        </li>

        <li  className="right">
          <button>
            <TfiSearch />
          </button>
        </li>
        <li className="right">
          <button>
            <TfiViewGrid />
          </button>
        </li>
        <li className="right">
          <button>
            <TfiWidgetAlt />
          </button>
        </li>
        <li className="right">
          <button>
            <TfiUser />
          </button>
        </li>
      </nav>
    </>
  );
}

export default Nav;
