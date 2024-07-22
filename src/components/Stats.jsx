function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWord} label="words" />
      <Stat number={stats.numberOfCharectar} label="charectar" />
      <Stat number={stats.instagramCharecterLeft} label="instagram" />
      <Stat number={stats.facebookCharecterLeft} label="facebook" />
    </section>
  );
}
function Stat({ number, label }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h1 className="second-heading">{label}</h1>
    </section>
  );
}
export default Stats;
