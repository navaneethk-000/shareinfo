import './App.css'
import FormFour from './components/FormFour/FormFour'
import Otp from './components/OTP/Otp'
import Profile12 from './pages/Profile12/Profile12'
import Profile7 from './pages/Profile7/Profile7'
import Profile9 from './pages/Profile9/Profile9'
import SignUp from './pages/SignUp/SignUp'
import Splash from './pages/Splash/Splash'
import { Routes, Route } from 'react-router-dom'
import SplashSubmit from './pages/SplashSubmit/SplashSubmit'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' exact element={<Splash/>} />
        <Route path='/SignUp' element={<SignUp/>}/>
        {/* <Route path='/Otp' element={<Otp/>}/> */}
        <Route path='/profile7' element={<Profile7/>}/>
        <Route path='/Profile9' element={<Profile9/>}/>
        <Route path='/Profile12'element={<Profile12/>}/>
        <Route path='/SplashSubmit'element={<SplashSubmit/>}/>
        {/* <Route path='/FormFour' element={<FormFour/>}/> */}
        <Route path='*' element= "No Page"/>
      </Routes>
    </>
  )
}

export default App;