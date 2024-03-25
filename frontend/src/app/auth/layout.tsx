import { ReactNode } from "react";

export default function AuthLayout(props: { children: ReactNode }) {
  return <main className="w-full h-screen p-0">{props.children}</main>;
}
