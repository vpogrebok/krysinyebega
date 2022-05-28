import * as React from "react"

import intro from "../../images/intro.png"
import Button from "../button/button"

const Intro = () => {
    return (
        <section className="intro" id="intro">
            <div className="intro__bg"></div>
            <div className="container">
                <div className="intro__blocks">
              <div className="intro__block">
                  <img className="intro__img" src={intro} alt="" />
              </div>
              <div className="intro__block">
                  <div className="intro__content">
                      <div className="intro__title">
                          <span>крысиные бега</span> - Игра, которая изменит твою жизнь!</div>
                      <div className="intro__subtitle">бизнес-тренажер, для повышения уровня финансовой грамотности</div>
                      <Button />
                  </div>
                </div>
                </div>
            </div>
        </section>
    )
}
export default Intro