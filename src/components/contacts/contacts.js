import * as React from "react"
import Button from "../button/button"

const Contacts = () => {
    return (
        <section className="contacts" id="contacts">
            <div className="container">
                <div className="contacts__blocks">
                    <div className="contacts__block">
                        <div className="contacts__title">Контакты</div>
                        <div className="contacts__subtitle">Закажи игру <br/><span>прямо сейчас!</span></div>
                        <div className="contacts__description">В течение 24 часов наш менеджер свяжется с вами и выяснят, как вам удобнее получить свой заказ. Спасибо за заказ и приятной вам игры.</div>
                        <Button />
                    </div>
                    <div className="contacts__block">
                        <div className="contacts__contact">
                            <div className="contacts__name">Адрес:</div>
                            <div className="contacts__adress">Украина, Киев, ул. Январского восстания 16</div>
                        </div>
                        <div className="contacts__contact">
                            <div className="contacts__name">Телефон:</div>
                            <a className="contacts__data" href="tel:+380983318231">+38 (098) 331-82-31</a>
                            <a className="contacts__data" href="tel:+380995219955">+38 (099) 521-99-55</a>
                        </div>
                        <div className="contacts__contact">
                            <div className="contacts__name">E-mail:</div>
                            <a className="contacts__data" href="mailto:Stanislavstroitelev@gmail.com">Stanislavstroitelev@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts