import React from "react";
import { useLocation, Link, Router } from "react-router-dom";
import "./navigation.css";

export const BreadcrumbNav = () => {
  const location = useLocation();
  const decodedPathnames = decodeURIComponent(location.pathname);
  const pathnames = decodedPathnames
    .split("/")
    .filter((path) => path.length != 0 && path.length < 20);

  const filtered = [...new Set(pathnames)];

  return (
    <>
      <ol className="breadcrumb d-flex flex-row  align-items-center justify-content-space-evenly ">
        <li>
          <Link to="/home">Home </Link>
        </li>
        {filtered.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={index}>
              <span className="fw-bolder "> / </span>
              {index !== filtered.length - 1 ? (
                <Link className="fw-bolder text-capitalize" to={routeTo}> {name} </Link>
              ) : (
                <span className="fw-bolder text-capitalize">{name}</span>
              )}
            </li>
          );
        })}
      </ol>
      <div className="shop-title display-4 fw-bolder row">
        {filtered[filtered.length - 1].slice(0, 1).toUpperCase() +
          filtered[filtered.length - 1].slice(
            1,
            filtered[filtered.length - 1].length
          )}
      </div>
    </>
  );
};
