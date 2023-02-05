import './Home.css'
import Categories from "./Categories/Categories"
import FoodOptions from './FoodOptions'


function Home() {
  return (
    <div className="Home">  
        <div className="Home-">
            <Categories/>
            <FoodOptions/>
        </div>
    </div>
  )
}

export default Home