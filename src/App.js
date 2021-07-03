function App() {

  function likeClick() {
    let img1 = document.getElementById('like-btn-img-1');
    let img2 = document.getElementById('like-btn-img-2');
    if (img1.classList[1] == 'active') {
      img1.classList.remove('active');
      img2.classList.add('active');
      console.log(img1);
      console.log(img2);
    }
    else if (img2.classList[1] == 'active') {
      img2.classList.remove('active');
      img1.classList.add('active');
      console.log(img1);
      console.log(img2);
    }
  }

  return (
    <div className="App">
      <header>
        <div className="header-inner">
          <div className="header-left">
            <img src="/images/logo.png" alt="" className="header-logo" />
            <div className="header-text">
              <div className="header-title">BIL store</div>
              <div className="header-subtitle">The best choice</div>
            </div>
          </div>
          <nav className="header-nav">
            <div className="nav-link">
              <img src="/images/cart.svg" alt="" className="nav-img" />
              <div className="nav-text">198$</div>
            </div>
            <div className="nav-link">
              <img src="/images/heart.svg" alt="" className="nav-img" />
            </div>
            <div className="nav-link">
              <img src="/images/user.svg" alt="" className="nav-img" />
            </div>
          </nav>
        </div>
      </header>
      <div className="container">
        <h1 className="home-title">Products</h1>
        <div className="home-content">
          <div className="product-main-card">
            <div className="top">
              <button className="icon-btn" onClick={() => likeClick()}>
                <img className="like-btn active" id="like-btn-img-1" src="/images/heart.svg" alt="" />
                <img className="like-btn" id="like-btn-img-2" src="/images/heart-active.svg" alt="" />
              </button>
            </div>
            <img src="/images/products/product1.jpg" alt="" className="img" />
            <div className="title">"Key to life" hoodie</div>
            <div className="bottom">
              <div className="price">
                <div className="price-text">
                  Price:
                </div>
                <div className="price-value">
                  25$
                </div>
              </div>
              <button className="box-btn plus">
                <img src="/images/plus.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;