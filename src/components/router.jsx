import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Main } from './main/main';
import { SideNav } from './menu/sideNav/sideNav';
import { Catalog } from './menu/catalog/catalog';

const Page = ({ children }) =>
  <>
    <Header />
    {children}
    <Footer />
  </>

const HomePage = () =>
  <>
    <Header />
    <Main />
  </>

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
    <h1>AboutPage</h1>
  </Page>

const ContactPage = () =>
  <Page>
    <h1>ContactPage</h1>
  </Page>

window.React = React;

export const App = () =>
  <BrowserRouter>
    <Route exact path='/' component={HomePage} />
    <Route path='/menu' component={MenuPage} />
    <Route exact path='/about' component={AboutPage} />
    <Route exact path='/contact' component={ContactPage} />
  </BrowserRouter>