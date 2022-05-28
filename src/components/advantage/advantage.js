import * as React from "react"
import Game from "../../images/game-23 2.png"

const Advantage = () => {
    return (
        <section className="advantage" id="advantage">
            <div className="container">
                <div className="advantage__blocks">
                    <div className="advantage__leftblock">
                        <div className="advantage__title">Приемущества</div>
                        <div className="advantage__subtitle">Lorem ipsum dolor sit amet,<br/>consectetur </div>
                    </div>
                    <div className="advantage__rightblock">
                        <div className="advantage__info">
                            <div className="advantage__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </div>
                            <div className="advantage__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </div>
                        </div>
                        <img className="advantage__img" src={Game} alt="" />
                        <div className="advantage__info">
                            <div className="advantage__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </div>
                            <div className="advantage__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantage