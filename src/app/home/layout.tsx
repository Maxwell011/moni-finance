import Nav from "../components/Nav";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Nav/>
      {children}
    
    </>
  );
}
