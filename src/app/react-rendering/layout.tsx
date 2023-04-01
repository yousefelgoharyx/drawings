import { Metadata } from "next";
export const metadata: Metadata = {
  title: "VecDraws - React Rendering",
  description: "VecDraws - React Rendering",
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
