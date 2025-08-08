import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import '../styles/About.css';
import IconCloud from '../components/IconCloud';

function About() {
  return (
    <body>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper about">
            <div className="about-container">
              <span className="span-tag html">{'<html>'}</span>
              <br />
              <span className="span-tag body">{'<body>'}</span>
              <br />
              <span className="span-tag content">{'<h1>'}</span>
              <h1 className="title-about">Olá,</h1>
              <span className="span-tag content">{'</h1>'}</span>
              <br />
              <span className="span-tag content">{'<p>'}</span>
              <p className="text-about">
                Sou <span className="span-highlight">Guilherme Macedo</span>, apaixonado por transformar ideias em soluções através do código. Formado em <span className="span-highlight">Desenvolvimento Web Full Stack</span> pelo Senai São Paulo e atualmente curso <span className="span-highlight">Bacharelado em Engenharia da Computação</span> na Universidade Anhembi Morumbi.
              </p>
              <p className="text-about">
                Meu objetivo é criar aplicações acessíveis, funcionais e capazes de melhorar a vida das pessoas, unindo criatividade, usabilidade e performance. Possuo experiência na solução de problemas complexos, na realização de testes e no trabalho em equipes multidisciplinares, sempre com foco em cumprir prazos e manter a qualidade das entregas.
              </p>
              <p className="text-about">
                Principais habilidades técnicas: <span className="span-highlight">HTML, CSS, SCSS, JavaScript, TypeScript, React, Next.js, VTEX IO, VTEX FastStore, Node.JS, Angular, Redux, Context API, Hooks, Jest/RTL, Java, Python, Git e GitHub.</span>  
              </p>
              
              <span className="span-tag content">{'</p>'}</span>
              <br />
              <span className="span-tag body">{'</body>'}</span>
              <br />
              <span className="span-tag html">{'</html>'}</span>
            </div>
            <IconCloud />
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </body>
  );
}

export default About;