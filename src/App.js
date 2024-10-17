import React, { Suspense, lazy } from 'react';
import Footer from './component/Footer'
import Error from './component/Error'
import Header from './component/Header';
import Home from "./page/Home"
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useGlobalContext } from './context/context';
import './App.scss';
const Search = lazy(() => import('./page/Search'))
const SingleMovie = lazy(() => import('./page/SingleMovie'))
function App() {
  const { query, dispatch } = useGlobalContext()
  return (
    <>
      <div className="app">
        <HashRouter>
          <Header query={query} dispatch={dispatch} />
          <Suspense fallback={<h1>LOADING...</h1>}>
            <Routes>
              <Route index element={<Home />} />
              <Route path='/movie/:id' element={<SingleMovie />} />
              <Route path='/search/:routerQuery' element={<Search />} />
              <Route path='*' element={<Error />} />
            </Routes>
          </Suspense>
          <Footer />
        </HashRouter>
      </div >
    </>
  );
}

export default App;