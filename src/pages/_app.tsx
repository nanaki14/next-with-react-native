import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import App from 'next/app'
import { GlobalStyles } from '~/components/styles/GlobalStyles'

type Props = {
  Component: NextComponentType<any, any, NextPageContext>
  pageProps: any
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
