import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Playground from "./pages/Playground"
import { ContextProvider } from "./context/SharedData"
function App() {

  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/playground' element={<Playground/>}/>  
        </Routes>
      </ContextProvider>
    </>
  )
}

export default App
