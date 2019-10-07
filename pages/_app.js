import '../data/Programs'

import React from 'react'
import App from 'next/app'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import withRedux from 'next-redux-wrapper'

import reducer from '../reducers/programsReducer.ts'

const makeStore = () => createStore(reducer)

class MyApp extends App {

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withRedux(makeStore)(MyApp)