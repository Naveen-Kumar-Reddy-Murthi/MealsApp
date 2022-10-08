import { useState } from 'react'
import { useGlobalContext } from '../context'
const Search = () => {
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext()
  const [text, setText] = useState('')
  const handleChange = (e) => {
    console.log("input value " + e.target.value);
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text) {
      console.log("input text " + text);
      setSearchTerm(text)
    }
  }

  const handleRandomMeal = () => {
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }
  return <header className='search-containter'>
    <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} value={text} placeholder='typle favorite meal'
        className='form-input' />
      <button type="submit" className='btn'>search</button>
      <button type="button" className="btn btn-hipster" onClick={handleRandomMeal}>
        surprise me!</button>
    </form>
  </header>
}
export default Search 