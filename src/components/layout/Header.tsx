import React from "react";
import { Logo } from "../common/logo";

// type Props = {};

function Header() {
  return (
    <header className="flex justify-center">
      <Logo className="z-10 h-20 cursor-pointer text-sky-800" />
    </header>
  );
}

export default Header;
