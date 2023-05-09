import "../index.css";
function News() {
  return (
    <div className="News">
      <section>
        <div className="newsLeft">
          <section>
            <h1>News</h1>
            <span>Thou Shall Not Pass: </span>
            <span> 8 Clean Sheets in 12 Matches!</span>
            <section className="newstickets">READ ARTICLE</section>
          </section>
        </div>
        <div className="newsRight">
          <img className="nrImg" alt="news" src="./assets/images/news.png" />
        </div>
      </section>
    </div>
  );
}
export default News;
