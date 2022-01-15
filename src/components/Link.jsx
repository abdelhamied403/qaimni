import React from "react";
import NLink from "next/link";
import { useRouter } from "next/router";

const Link = ({ children, ...rest }) => {
  const router = useRouter();
  return (
    <NLink {...rest}>
      <a
        className={`hover:text-primary transition-colors ${
          router.pathname === rest.href ? "text-primary" : ""
        }`}
      >
        {children}
      </a>
    </NLink>
  );
};

export default Link;
