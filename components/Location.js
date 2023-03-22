export default function Location({ name, type }) {
  return (
    <>
      <section className="locationDetails">
        <h1>
          {name}: {type}
        </h1>
      </section>
    </>
  );
}
