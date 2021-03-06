import React, { useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import IntlMessages from "util/IntlMessages";
import CustomScrollbars from "util/CustomScrollbars";

const SidenavContent = (props) => {
  useEffect(() => {
    const { history } = props;
    const pathname = `${history.location.pathname}`; // get current path

    const menuLi = document.getElementsByClassName("menu");
    for (let i = 0; i < menuLi.length; i++) {
      menuLi[i].onclick = function(event) {
        const parentLiEle = closest(this, "li");
        if (menuLi[i].classList.contains("menu") && parentLiEle !== null) {
          event.stopPropagation();

          if (menuLi[i].classList.contains("open")) {
            menuLi[i].classList.remove("open", "active");
          } else {
            menuLi[i].classList.add("open", "active");
          }
        } else {
          for (let j = 0; j < menuLi.length; j++) {
            const parentLi = closest(this, "li");
            if (
              menuLi[j] !== this &&
              (parentLi === null || !parentLi.classList.contains("open"))
            ) {
              menuLi[j].classList.remove("open");
            } else {
              if (menuLi[j].classList.contains("open")) {
                menuLi[j].classList.remove("open");
              } else {
                menuLi[j].classList.add("open");
              }
            }
          }
        }
      };
    }

    const activeLi = document.querySelector('a[href="' + pathname + '"]'); // select current a element
    try {
      const activeNav = closest(activeLi, "ul"); // select closest ul
      if (activeNav.classList.contains("sub-menu")) {
        closest(activeNav, "li").classList.add("open");
      } else {
        closest(activeLi, "li").classList.add("open");
      }
    } catch (error) {}
  }, [props]);

  useEffect(() => {
    const { history } = props;
    const pathname = `${history.location.pathname}`; // get current path

    const activeLi = document.querySelector('a[href="' + pathname + '"]'); // select current a element
    try {
      const activeNav = closest(activeLi, "ul"); // select closest ul
      if (activeNav.classList.contains("sub-menu")) {
        closest(activeNav, "li").classList.add("open");
      } else {
        closest(activeLi, "li").classList.add("open");
      }
    } catch (error) {}
  }, [props]);

  const closest = (el, selector) => {
    try {
      let matchesFn;
      // find vendor prefix
      [
        "matches",
        "webkitMatchesSelector",
        "mozMatchesSelector",
        "msMatchesSelector",
        "oMatchesSelector",
      ].some(function(fn) {
        if (typeof document.body[fn] === "function") {
          matchesFn = fn;
          return true;
        }
        return false;
      });

      let parent;

      // traverse parents
      while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
          return parent;
        }
        el = parent;
      }
    } catch (e) {}

    return null;
  };

  return (
    <CustomScrollbars className=" scrollbar">
      <ul className="nav-menu">
        <li className="nav-header">
          <IntlMessages id="sidebar.main" />
        </li>
        {props.user && props.user.roleId !== 3 ? (
          <li className="menu no-arrow">
            <NavLink to="/app/dashboard">
              <i className="zmdi zmdi-view-dashboard zmdi-hc-fw" />
              <span className="nav-text">หน้าหลัก</span>
            </NavLink>
          </li>
        ) : (
          ""
        )}
        {props.user && props.user.roleId !== 3 ? (
          <li className="nav-header">สิทธิ์การใช้งาน</li>
        ) : (
          ""
        )}
        {props.user && props.user.roleId !== 3 ? (
          <li className="menu no-arrow">
            <NavLink to="/app/users">
              <i className="zmdi zmdi-account-box-o zmdi-hc-fw" />
              <span className="nav-text">
                <IntlMessages id="users.main" />{" "}
              </span>
            </NavLink>
          </li>
        ) : (
          ""
        )}
        {props.user && props.user.roleId === 3 ? (
          <li className="menu no-arrow">
            <NavLink to="/app/main">
              <i className="zmdi zmdi-home zmdi-hc-fw" />
              <span className="nav-text">หน้าหลัก </span>
            </NavLink>
          </li>
        ) : (
          ""
        )}
        {props.user && props.user.roleId === 3 ? (
          <li className="menu no-arrow">
            <NavLink to="/app/reqform">
              <i className="zmdi zmdi-assignment zmdi-hc-fw" />
              <span className="nav-text">คำขอขึ้นทะเบียน </span>
            </NavLink>
          </li>
        ) : (
          ""
        )}
      </ul>
    </CustomScrollbars>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.authUser,
});

export default connect(mapStateToProps, {})(withRouter(SidenavContent));
