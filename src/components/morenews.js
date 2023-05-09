import "../index.css";
function MoreNews() {
  return (
    <div className="MoreNews">
      <section>
        <div className="mnLeft">
          <div className="imgContainer">
            <img src="./assets/images/news1.jpg" alt=""></img>
          </div>
          <h1>05/05/23</h1>
          <span>
            Coach Robert Matano Post Match Interview on the 0-0 draw vs City
            Stars. " We lacked composure."
          </span>
        </div>
        <div className="mnCenter">
          <div className="imgContainer">
            <img src="./assets/images/news2.jpg" alt=""></img>
          </div>
          <h1>05/05/23</h1>
          <span>
            Faces of Tusker. Shaphan Oyugi , our new attacking midfielder
          </span>
        </div>
        <div className="mnRigth">
          <div className="imgContainer">
            <img src="./assets/images/news3.jpg" alt=""></img>
          </div>
          <h1>05/05/23</h1>
          <span>
            "Casemiro. KDB. Humphrey Mieno." Gabriel Oguda. Humphrey Mieno -
            World Class
          </span>
        </div>
      </section>
    </div>
  );
}
export default MoreNews;
