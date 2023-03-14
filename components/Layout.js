import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar>Queer Map BER</Navbar>
      <main>{children}</main>
    </>
  );
}
