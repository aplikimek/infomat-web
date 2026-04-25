export const metadata = {
  title: "InfoMat Studio",
  description: "Content Management",
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}
