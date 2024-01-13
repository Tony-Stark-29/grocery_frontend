import React from "react";
import { useLocation, Link } from "react-router-dom";

export const BreadcrumbNav = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb  font-weight-light ">
      <ol class="breadcrumb ">
        <li class="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join(">")}`;
          console.log(routeTo);
          return (
            <li key={index} class="breadcrumb-item">
              <Link className="text-capitalize" to={routeTo}>
                {routeTo.replace("/", "")}
              </Link>
            </li>
          );
        })}
      </ol>
      <h2 className="fs-1 fw-bolder text-capitalize text-shadow">
        {pathnames[pathnames.length - 1]}
      </h2>
    </nav>
  );
};
