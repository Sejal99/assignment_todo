import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Todos } from './components/Todos'
import { UpdateTodo } from './components/UpdateTodo'


function App() {
  

  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Todos />} />
        <Route path='/updateTodo/:id' element={<UpdateTodo />} />
     
      </Routes>
    </Router>

     
    </div>
  )
}

export default App
