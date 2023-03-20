export default function LocationDetail({
  comment,
  age,
  sexual_orientation,
  gender,
  bipoc,
  _id,
  date,
  type,
}) {
  return (
    <>
      <section className="location-details">
        <h3>
          {name}: {type}
        </h3>
      </section>
      <div className="commentCard" key={_id}>
        <p className="date" key={date}>
          {date}
        </p>
        <p className="comment" key={comment}>
          {comment}
        </p>
        <div className="demographic-data" key={_id}>
          <li key={age}>{age}</li>
          <li key={sexual_orientation}>{sexual_orientation}</li>
          <li key={gender}>{gender}</li>
          <li key={bipoc}>{bipoc}</li>
        </div>
      </div>
    </>
  );
}
