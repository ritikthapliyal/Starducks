import '../Home.css'
import Category from './Category'
import { useSelector } from 'react-redux'

function Categories() {

    const {Categories,selectedCategory} = useSelector((state) => state.uiState)

    return (
        <div className='Categories'>
            <p>{`Selected : ${selectedCategory}`}</p>
            {
                Categories.map((category,index)=>{
                    return <Category key={index} category={category} id={index}/>
                })
            }
        </div>
    )
}

export default Categories