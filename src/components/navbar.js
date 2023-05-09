import "../index.css";
function Navbar() {
  return (
    <div className="navbar">
      <section>
        <div className="navbarRight">
          <h1>Tusker FC</h1>
          <span>Schedule</span>
          <span>Club</span>
          <span>Community</span>
          <span>News</span>
          <span>Merch</span>
          <span>FAQ</span>
        </div>
        <div className="navbarLeft">
          <div className="navbarSchedule">Schedule</div>
          <div className="navbarTickets">Tickets</div>
        </div>
      </section>
    </div>
  );
}
export default Navbar;
