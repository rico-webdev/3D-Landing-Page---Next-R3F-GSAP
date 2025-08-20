import React from "react";
import Logo from "../common/Logo";

// type Props = {};

function Header() {
  return (
    <header className="relative z-10 -mb-28 flex justify-center py-4">
      <Logo className="h-20 cursor-pointer text-sky-800" />
    </header>
  );
}

export default Header;
