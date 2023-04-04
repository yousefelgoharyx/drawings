import { Metadata } from "next";
export const metadata: Metadata = {
  title: "VecDraws - ACID",
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
