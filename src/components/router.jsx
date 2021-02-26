import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Home } from './home/home';
import { Menu } from './menu/menu';
import { About } from './about/about';
import { Contact } from './contact/contact';

import backgroundScroll from '../scripts/backgroundScroll';
//import i18n from '../scripts/i18n';

const Page = ({ children }) =>
  <>
    <Header />
    {children}
    <Footer />
  </>

const HomePage = () =>
  <Page>
    <Home />
  </Page>

const MenuPage = () =>
  <Page>
    <Menu />
  </Page>

const AboutPage = () =>
  <Page>
    <About />
  </Page>

const ContactPage = () =>
  <Page>
    <Contact />
  </Page>

window.React = React;

export const App = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={HomePage} />
      <Route path='/menu' component={MenuPage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/contact' component={ContactPage} />
      {backgroundScroll()}
    </BrowserRouter>
  )
}