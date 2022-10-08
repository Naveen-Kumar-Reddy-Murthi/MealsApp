import './App.css'
import Favourites from './components/Favorites.jsx'
import Meals from './components/Meals.jsx'
import Modal from './components/Modal.jsx'
import Search from './components/Search.jsx'
import { useGlobalContext } from './context'

export default function App() {
  const { showModal } = useGlobalContext()
  return (
    <main>
      <Search />
      {/* <Favorites/>*/}

      <Meals />
      {showModal && <Modal />}
    </main>
  )
}
