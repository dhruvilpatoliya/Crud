import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentDetails from './Components/StudentDetails/StudentDetails'
import ViewPage from './Components/StudentDetails/ViewPage/ViewPage'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router'
import EditStudent from './Components/EditStudent/EditStudent'
import ViewAll from './Components/ViewAll/ViweAll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    <Routes>
      <Route path='/StudentDetails' element={<StudentDetails/>}/>
      <Route path='/ViewPage' element={<ViewPage/>}/>
      <Route path='/EditStudent' element={<EditStudent/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>
    </Routes>
    </>
  )
}

export default App
