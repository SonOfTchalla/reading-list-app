import Header from "./components/Header"
import Main from "./components/Main"
import AddBook from "./components/AddBook"

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <Main />
        <AddBook />
      </div>
    </>
  )
}

export default App
