import GlobalContext from "./contexts/GlobalContext"
import Header from "./layouts/Header"
import Main from "./layouts/Main"
import Footer from "./layouts/Footer"
import { BASE_URI } from "./config"
import { useState, useEffect } from "react"
import axios from "axios"



function App() {

  const [films, setFilms] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const apiKey = '78a44a25b2660e74bdb31e0ac51d2a58'

  function fetchFilms() {

    axios.get(BASE_URI, {
      params: {
        api_key: apiKey,
        query: searchQuery
      }
    })
      .then((res) => {
        setFilms(res.data.results)
        console.log(res.data.results)

      })
      .catch((err) => {
        console.error(err)

      })
  }

  useEffect(() => {
    fetchFilms()
  }, [])

  function filterFilms(e) {
    e.preventDefault()
  }

  function handleSearch() {
    if (searchQuery.trim()) {
      fetchFilms(searchQuery)
    }
  }



  return (
    <GlobalContext.Provider value={{ films }}>
      <Header searchQuery={searchQuery} filterFilms={filterFilms} handleSearch={handleSearch} setSearchQuery={setSearchQuery} />
      <Main />
      <Footer />
    </GlobalContext.Provider>
  );
};

export default App;
