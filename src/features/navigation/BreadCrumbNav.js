import React from "react";
import { useLocation, Link, Router } from "react-router-dom";
import "./navigation.css";

export const BreadcrumbNav = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((p) => p);

  const filtered = [...new Set(pathnames)];

  return (
    <>
      <ol class="breadcrumb d-flex flex-row  align-items-center justify-content-space-evenly ">
        <li>
          <Link to="/home">Home </Link>
        </li>
        {filtered.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li>
              <span className="fw-bolder"> / </span>
              <Link to={routeTo}> {name} </Link>
            </li>
          );
        })}
      </ol>
      <div className="display-4 fw-bolder row">{filtered[filtered.length-1]}</div>
    </>
  );
};
