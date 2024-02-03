import React from "react";
import { PrimaryNavigation } from "../navigation/PrimaryNavigation";
import { MobileNavigation } from "../navigation/MobileNavigation";

export const Header = () => {
  return (
    <header className="container-fluid position-sticky sticky-top  ">
      <div className="container">
        <PrimaryNavigation />
        <MobileNavigation />  
      </div>
    </header>
  );
};
