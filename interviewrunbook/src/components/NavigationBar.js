import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavigationLink from "./NavigationLink";
import Link from "next/link";

export default function NavigationBar(router) {
  const HOME_LABEL = "Home";
  const HOME_PATHNAME = "/";
  const SURVEYS_LABEL = "Articles";
  const SURVEYS_PATHNAME = "/articles";
  const ABOUT_LABEL = "About";
  const ABOUT_PATHNAME = "/about";

  const isActive = (pathname) => router.pathname === pathname && "active";

  return (
    <header>
      <Navbar bg="dark">
      <div className="nav-container">
        <Link href={HOME_PATHNAME} className="nav-link">
          {HOME_LABEL}
        </Link>
        </div>.
        <div className="nav-container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <NavigationLink href={HOME_PATHNAME} label={HOME_LABEL} isActive={isActive(HOME_PATHNAME)}/>
              </Nav.Item>

              <Nav.Item className={isActive(SURVEYS_PATHNAME)}>
                <NavigationLink href={SURVEYS_PATHNAME} label={SURVEYS_LABEL} isActive={isActive(SURVEYS_PATHNAME)}/>
              </Nav.Item>

              <Nav.Item className={isActive(ABOUT_PATHNAME)}>
                <NavigationLink href={ABOUT_PATHNAME} label={ABOUT_LABEL} isActive={isActive(ABOUT_PATHNAME)}/>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}
