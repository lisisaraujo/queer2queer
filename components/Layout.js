import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header>Queer Map BER</Header>
      <main>{children}</main>
    </>
  );
}
