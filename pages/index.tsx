import Head from 'next/head'
import React, { Component } from 'react'
import Form from './Form'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>

      <header>
        <div className="App">
          <div className="main">
            <div className="center">
              <div className="menu">
                <div className="logo">                  
                  <h1>FACILITA</h1>
                </div>

                <div className='pages h2'>
                <h2>Quem Somos</h2> 
                <h2><a href="form.tsx">Fale conosco</a></h2>
                <h2>Tipos de empréstimos</h2>
                </div>
                
                <div className="item-menu">
                  <a href="#" > Login </a>
                  </div>

              </div>
            </div>
          </div>
        </div>

      </header>
      <main>
      <div>
        
      </div>


      </main>
    </div>
  )
}
