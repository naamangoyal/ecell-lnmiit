import logo from './logo.svg';
import './App.css';

import Home from './comp/Home'
import About from './comp/aboutUs/About'

import Gallery from './comp/Gallery';
import Footer from './comp/footer/Footer'
import Team from './comp/team/Team';
import Events from './comp/events/Events'

import SideIcon from './comp/SideIcon';
import styled from 'styled-components';
import ButtonAppBar from './comp/nav/navbar';
import Menu from './comp/menu/menu';



function App() {
  
  return (
    <div className="App">
  
      <Menu/>
     
      <About/>
      <Events/>
      
      <Team/>
      <Footer/>
    </div>
  );
}



export default App;



