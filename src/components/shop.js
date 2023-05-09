import "../index.css";
import SocialMediaIcons from "./socialmedia";

function Shop() {
  const renderItems = () => {
    const items = [];
    for (let i = 0; i < 15; i++) {
      items.push(
        <div key={i} className="loop">
          <img
            src="./assets/images/tuskers.png"
            alt=""
            className="marqueelogo"
          />
          <p className="marqueetext">TuskerFC</p>
        </div>
      );
    }
    return items;
  };
  return (
    <div className="shop">
      <div className="shopDiv">
        <h1>Support The Brewers</h1>
        <p>
          New merch just dropped. Get a chance Represent Tusker FC at every game
          and in the street.#LETHIMCOOK
        </p>
        <div className="buttons">
          <div className="shopDivButton">Shop All Merch</div>
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
}
export default Shop;
