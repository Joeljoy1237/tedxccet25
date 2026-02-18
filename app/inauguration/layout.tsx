import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inauguration | TEDxCCET 2026",
  description: "TEDxCCET 2026 Inauguration",
  robots: {
    index: false,
    follow: false,
  },
};

export default function InaugurationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
