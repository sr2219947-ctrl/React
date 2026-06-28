export default function Card({ cloth, offer, price, image }) {
  return (
    <div className="card">
      <div className="card-img-wrap">
        <img src={image} alt={cloth} />
        <span className="wishlist-btn">♡</span>
      </div>
      <div className="card-info">
        <h3>{cloth}</h3>
        <p className="offer">{offer}</p>
        <h2>₹ {price}</h2>
        <button>Add to Bag</button>
      </div>
    </div>
  );
}