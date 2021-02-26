import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Home } from './home/home';
import { Menu } from './menu/menu';
import { About } from './about/about';
import { Contact } from './contact/contact';

import backgroundScroll from '../scripts/backgroundScroll';

window.React = React;

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/menu' component={Menu} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Footer />
      {backgroundScroll()}
    </BrowserRouter>
  )
}