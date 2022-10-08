import './App.css'
import Favorites from './components/Favorites.jsx'
import Meals from './components/Meals.jsx'
import Modal from './components/Modal.jsx'
import Search from './components/Search.jsx'
import { useGlobalContext } from './context'

export default function App() {
  const { showModal, favorites } = useGlobalContext()
  return (
    <main>
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Meals />
      {showModal && <Modal />}
    </main>
  )
}
