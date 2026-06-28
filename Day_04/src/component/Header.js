export default function Header({ sortProducts, activeSort }) {
  return (
    <div className="heading">

      <div className="logo">
        <img
          src="https://i.pinimg.com/736x/75/68/05/75680550fdc2305216ad9014d2b8b8f2.jpg"
          alt="Myntra"
          className="logo-img"
        />
      </div>

      <nav className="nav-links">
        <button>Men</button>
        <button>Women</button>
        <button>Kids</button>
        <button>Home</button>
        <button>Beauty</button>
      </nav>

      <input
        className="searchbar"
        placeholder="🔍  Search for products, brands and more"
      />

      <div className="sort">
        <span className="sort-label">Sort:</span>
        <button
          className={activeSort === "low" ? "active" : ""}
          onClick={() => sortProducts("low")}
        >
          Price ↑
        </button>
        <button
          className={activeSort === "high" ? "active" : ""}
          onClick={() => sortProducts("high")}
        >
          Price ↓
        </button>
        <button
          className={activeSort === "mid" ? "active" : ""}
          onClick={() => sortProducts("mid")}
        >
          Mid Range
        </button>
        <button
          className={activeSort === "all" ? "active" : ""}
          onClick={() => sortProducts("all")}
        >
          All
        </button>
      </div>

      <div className="profile-section">
        <button>👤 Profile</button>
        <button>♡ Wishlist</button>
        <button>🛍 Bag</button>
      </div>

    </div>
  );
}