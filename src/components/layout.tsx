import React from "react";
import SEO from "./seo";

export default function Layout({
  children,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div>
      <SEO></SEO>
      {children}
    </div>
  );
}
