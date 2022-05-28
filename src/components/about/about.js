import * as React from "react"

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <h1 className="about__title">О играх</h1>
                <div className="about__subtitle">Крысиные бега – <span>учит</span> тому,
                    <br/>чему <span>не учили в школе!</span>
                </div>
                <div className="about__info">
                    <div className="about__block">Это настольная игра, которая позволяет освоить  
                        <span> основы финансовой грамотности</span> и научиться грамотному 
                        <span> управлению деньгами</span>
                    </div>
                    <div className="about__block">А самые современные и продвинутые версии этой игры учат еще более интересным и полезным вещам: открытию и масштабированию собственного бизнеса, использованию для его продвижения маркетинга и рекламы, управлению своим бизнесом, защите своего бизнеса во время кризиса, торговле на рынке земли, недвижимости и ценных бумаг.</div>
                </div>
            </div>
        </section>
    )
}

export default About