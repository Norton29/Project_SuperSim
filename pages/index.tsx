/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import React, { Component } from 'react'
import Image from 'next/image'


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

      <body>

        <div className="main_body">
          <h1> HELLO WORLD</h1>
          <h1> HELLO WORLD</h1>
          <h1> HELLO WORLD</h1>
          <h1> HELLO WORLD</h1>
          <h1> HELLO WORLD</h1>
          <h1> HELLO WORLD</h1>


        </div>


      </body>



      <footer>
        <div className="main_footer">
          <div className="box">
            <div className="navbar-nav">
              <li><a href="">Sobre</a></li>
              <li><a href="">Empregos</a></li>
              <li><a href="">Novidades</a></li>
              <li><a href="">Ajuda</a></li>
              <h4>redes sociais</h4>
            </div>















          </div>
        </div>
      </footer >
    </div >
  )
}
