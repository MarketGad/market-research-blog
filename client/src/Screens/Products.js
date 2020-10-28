import React from "react";
import Footer from "../Components/Footer";
import PeopleList from "../Components/PeopleList";
import ProductList from "../Components/ProductList";
import Subscribe from "../Components/Subscribe";
import TodayLaunch from "../Components/TodayLaunch";
import TrendingProduct from "../Components/TrendingProduct";
import CarouselSlider from "../Components/Carousel";
import SimpleCard from "../Components/Demo";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
    };
  }
  render() {
    return (
      <div style={{ backgroundColor: "rgb(240,240,240)" }}>
        <img
          src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603731354/Theme/home_cover_Photo_xklaxg.jpg"
          width="100%"
        ></img>
        <div style={{ margin: "1%", backgroundColor: "white" }}>
          <p style={{ marginLeft: "5%", fontSize: "1.6em" }}>What's New?</p>
          <CarouselSlider />
        </div>
        <div style={{ marginTop: "2%" }}>
          <div className="topnav-prod">
            <a href="#topprod">Top Products</a>
            <a href="#">Trending Talents</a>
          </div>
        </div>
        <h4>
          <a name="topprod"></a>
        </h4>
        <div className="prod-cards">
          <div className="row" style={{ padding: "0 2%" }}>
            <div className="col s12 m6 l4 " style={{ padding: "0 1% 2% 1%" }}>
              <SimpleCard />
            </div>
            <div className="col s12 m6 l4 " style={{ padding: "0 1% 2% 1%" }}>
              <SimpleCard />
            </div>
            <div className="col s12 m6 l4" style={{ padding: "0 1% 2% 1%" }}>
              <SimpleCard />
            </div>
          </div>
        </div>

        {/* <div className="product-job-page-container">
          <div className="row">
            <div className="col s12 l8">
              <div className="product-page-head">What's hot today?</div>
              <h6 className="product-quote">
                Latest cool stuffs to fix your pain points. Vote the best one.
              </h6>
              <TodayLaunch todayLaunch={this.props.todayLaunch} />
              <div className="product-page-head">Most liked</div>
              <ProductList
                products={
                  this.props.products === undefined ? [] : this.props.products
                }
              />
            </div>
            <div className="col s12 l4 joblist">
              <div className="add-mobile-btn">
                <div className="product-page-head">Trending products</div>
                <TrendingProduct trending={this.props.trending} />
              </div>
              <div className="row" style={{ margin: "0", padding: "0" }}>
                <div className="col s12 m8">
                  <div
                    className="product-page-head left-head"
                    style={{ paddingTop: "5px" }}
                  >
                    Trending talents
                  </div>
                  <h6 className="product-quote">Open for opportunities</h6>
                </div>
                <div className="col s4">
                  <div className="right-align">
                    <a
                      className="waves-effect waves-light btn-small pro-btn1 add-mobile-btn"
                      href="/registerforjobs"
                    >
                      Add profile
                    </a>
                  </div>
                </div>
              </div>
              <PeopleList
                jobProfiles={
                  this.props.jobProfiles === undefined
                    ? []
                    : this.props.jobProfiles
                }
              />
            </div>
          </div>
			</div>*/}
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default Products;
