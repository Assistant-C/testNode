import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'

import Team2 from './pages/Team2/Team2'
import i from "./assets/img/i.png"
import scr from "./assets/img/scr.png"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter> 
    
    <div className="b">
         <div className="navigation">
          <img className='navim' src={scr} alt="" />
          <p className='navwhite'>INFluentzilla</p>
          <div className="ima">
            <img className='imya' src={i} alt="" />
            <p className='blin'>Аліна</p>
          </div>
          <div className="ima">
          <img className='imya' src={i} alt="" />
          <p className='blin'>Саша</p>
          </div>
          <div className="ima">
          <img className='imya' src={i} alt="" />
          <p className='blin'>Рома</p>
          </div>
          <Link className='peregl' to ='/Team2'>Переглянути</Link>
         </div>

     <div className="pblock"></div>
     <div className="pblock"></div>

    
     <div className="blolo">
     <Routes>
      <Route path ='/Team2' element={<Team2></Team2>}>      </Route>
      
     </Routes>
     </div>
     </div>
     
     </BrowserRouter>
     
   
    
   
    </>
  )
}

export default App
