import { useGlobalContext } from '../context'
import { FiDelete } from 'react-icons/fi'

const Favorites = () => {
  const { favorites, selectMeal, removeFromFavorites } = useGlobalContext()

  return <section className="favorites">
    <div className="favorites-content">
      <h5>Favorites</h5>
      <div className="favorites-container">
        {favorites.map((item) => {
          const { idMeal, strMealThumb: image, strMeal } = item;

          return <div key={idMeal} className="favorite-item" >
            <h10>{strMeal}</h10>
            <img src={image} className="favorites-img img" onClick={() => selectMeal(idMeal, true)} />
            <button className='remove-btn' onClick={() => removeFromFavorites(idMeal)}><FiDelete size='15px' /></button>
          </div>
        })}
      </div>
    </div>
  </section>
}


export default Favorites