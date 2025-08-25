import React from "react";
import Logo from "../ui/common/Logo";

// type Props = {};

function Header() {
  return (
    <header className="relative z-10 -mb-28 flex justify-center py-4">
      <Logo className="text-sunset h-20 cursor-pointer" />
    </header>
  );
}

export default Header;
