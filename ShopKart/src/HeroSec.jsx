import "./App.css/";

function HeroSec() {
  return (
    <>
      <div className="hero-container">
        <div className="title">
          <div className="title-items">
            <h1>ShopKart</h1>
            <div className="title">
              <span>WISHLIST (0)</span>
              <span>Bag (0)</span>
            </div>
          </div>
        </div>
        <div id="nav" className="nav">
          
          
          <h1>Home</h1>
          <h1>About</h1>
          <div className="product">
            <div className="product-list">
              <h1>Our Products</h1>
              <span>Product 1</span>
              <span>Product 2</span>
              <span>Product 3</span>
              <span>Product 4</span>
            </div>
          </div>
          <h1>Contact us</h1>
        </div>

        <div className="hero-bottom">
            <div className="hero-text">
                <h1 className="fresh">Fresh</h1>
                <h1 className="year">2022</h1>
                <h1 className="look">Look</h1>

            </div>
            <div className="hero-img">
                <img src="https://s3-alpha-sig.figma.com/img/2129/d70b/4de9b05701303b560c9103908d936cb1?Expires=1696809600&Signature=PsPKpXImyPFUV1OhL-mJTcUKYZWe4jVVT8ECdRH02Gwkf0K7olPWv2bGp1fvJw7uHHR3gFY7TPOZw-DWotHZ6DpUvGh6cEcclWitpzIsFfx1PCdgDZk7lXmziA4-l4MEE5vz4oB~yIHDJmVnuGWzgXKQr4ylXA0AiiJ2tgd2hZmIHwJfElzvtZbfEjxWJaO83pjAdr~fKKCP5ZSEWwiP6Lai4dVj9gdgCXI6f7nrTQqTHhuYni~Tui4xT0yDH2~P2CPWKmhPHpR8Zm6y9z8dVe33r8rZEjLUkJ3tbRi8fiTNnFiHLVGjVjXlUPtKhQ6rZFtRA01OW3Y7H74ZGiGYGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="boy" width={332} height={474} />

            </div>
        </div>
      </div>
    </>
  );
}
export default HeroSec;
