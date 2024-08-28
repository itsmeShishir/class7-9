import { SlideHome } from "../../component/slider";
import Category from "./category";
import FeaturedProduct from "./FeaturedProduct";
import Product from "./product";

const Home = () => {
    
  return (
    <div>
        <SlideHome />
        <Category />
        <FeaturedProduct />
        <Product />
    </div>
  )
}

export default Home