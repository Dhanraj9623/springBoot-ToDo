import ListTodoComponent from './components/ListTodoComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import TodoComponent from './components/TodoComponent'
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'

function App() {

  return (

    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          {/* http://localhost:8080 */}
          <Route path="/" element={<LoginComponent/>} />
          {/* http://localhost:8080/todos */}
          <Route path="/todos" element={<ListTodoComponent/>} />
          {/* http://localhost:8080/add-todo */}
          <Route path="/add-todo" element={<TodoComponent/>} />
          {/* http://localhost:8080/update-todo/1 */}
          <Route path="/update-todo/:id" element={<TodoComponent/>} />
          {/* http://localhost:8080/register */}
          <Route path="/register" element={<RegisterComponent/>} />
          {/* http://localhost:8080/login */}
          <Route path="/login" element={<LoginComponent/>} />
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
      
    </>
  )
}

export default App
