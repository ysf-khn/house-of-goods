"use client";

import { usePathname } from "next/navigation";

export default function PaddingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const paddingClass = pathname === "/" ? "" : "pt-24";
  return <div className={paddingClass}>{children}</div>;
}
