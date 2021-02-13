import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Home } from './home/home';
import { SideNav } from './menu/sideNav/sideNav';
import { Catalog } from './menu/catalog/catalog';
import { About } from './about/about';
import { Contact } from './contact/contact';

import { ScriptRouter } from '../scripts/scriptsRouter';

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
    <main className='menu'>
      <SideNav />
      <section className='menu-catalog'>
        <Route exact path="/menu" />
        <Route path="/menu/1" component={() => Catalog('111111')} />
        <Route path="/menu/2" component={() => Catalog('222222')} />
      </section>
    </main>
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

export const App = () =>
  <BrowserRouter>
    <Route exact path='/' component={HomePage} />
    <Route path='/menu' component={MenuPage} />
    <Route exact path='/about' component={AboutPage} />
    <Route exact path='/contact' component={ContactPage} />
    {ScriptRouter.backgroundScroll()}
  </BrowserRouter>