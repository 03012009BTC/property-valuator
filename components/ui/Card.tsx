import * as React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl border bg-white p-4 shadow">{children}</div>;
}