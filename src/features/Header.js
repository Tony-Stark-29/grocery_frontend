import React from "react";
import { PrimaryNavigation } from "./PrimaryNavigation";
import { MobileNavigation } from "./navigation/MobileNavigation";

export const Header = () => {
  return (
    <header className="container-flex position-sticky sticky-top">
      <PrimaryNavigation />
      <MobileNavigation />
    </header>
  );
};
