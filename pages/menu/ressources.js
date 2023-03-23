import Layout from "../../components/Layout";
import GlobalStyle from "../../components/GlobalStyle";
import ReturnButton from "../../components/Buttons/ReturnButton";

export default function Ressources() {
  return (
    <>
      <ReturnButton />
      <GlobalStyle></GlobalStyle>

      <Layout>
        <h1>Ressources</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </Layout>
    </>
  );
}
