import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import { Header } from './header/header';
import { Main } from './main/main';

const Page = ({ children }) =>
  <>
    <Header />
    {children}
  </>

const HomePage = () =>
  <Page>
    <Main />
  </Page>

const MenuPage = () =>
  <Page>
    <h1>MenuPage</h1>
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
    <Route exact path='/menu' component={MenuPage} />
    <Route exact path='/about' component={AboutPage} />
    <Route exact path='/contact' component={ContactPage} />
  </BrowserRouter>