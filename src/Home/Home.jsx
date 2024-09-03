import React from 'react'
import Main from './Main'
import Nav from '../components/Nav' 
import Popular from './suggestions/Popular'
import ContinueWatching from './suggestions/ContinueWatching'
function Home() {
  return (
    <>
    <Nav />
    <Main />
    <Popular />
    <ContinueWatching />
    </>
  )
}

export default Home