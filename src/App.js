import React from 'react';
import './Global.scss';
import * as s from './App.styles';
import Sidebar from './components/Sidebar/Sidebar';
import MainView from './components/MainView/MainView';


const App = ()=> {
  const backgroundImage ='images/mountain.jpg'
  const siderbarHeader = {fullName: 'Yo Yo Travel', shortName: 'Yo'}
  const menuItems = [
    {name: 'Home', to: '/', icon: 'images/home.svg', subMenu:[]}, 
    {name: 'About', to: '/about', icon: 'images/about.svg', subMenu:[]}, 
    {
      name: 'Destinations', 
      to: '/destinations', 
      icon: 'images/destinations.svg', 
      subMenu:[
        {name: 'Canada', to:'/canada'},
        {name: 'China', to:'/china'},
        {name: 'Viet Nam', to:'/vietnam'},
        {name: 'Laos', to:'/laos'},
        {name: 'India', to:'/india'},
      ]}, 
    {name: 'Blog', to: '/blog', icon: 'images/blog.svg', subMenu:[]}, 
    {name: 'Services', to: '/services', icon: 'images/services.svg', subMenu:[]}, 
    {name: 'Contacts', to: '/contacts', icon: 'images/contacts.svg',       subMenu:[
        {name: 'Canada', to:'/canada'},
        {name: 'China', to:'/china'},
        {name: 'Viet Nam', to:'/vietnam'},
        {name: 'Laos', to:'/laos'},
        {name: 'India', to:'/india'},
      ]}, 
    ]
  const fonts = {
    header: 'ZCOOL KuaiLe',
    menu: 'Poppins' 
  }
  return (
    <s.App>      
      <Sidebar 
        backgroundImage={backgroundImage} 
        sidebarHeader={siderbarHeader}
        menuItems={menuItems}
        fonts={fonts}
       />
      <MainView />
    </s.App>
  );
}

export default App;
