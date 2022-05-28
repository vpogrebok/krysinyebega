import React, {useState} from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import ToggleMenu from "../togglemenu/togglemenu"
import classNames from "classnames"

const Header = () => {
  const [isShow, setIsShow] = useState(false)
   
  const toggleOnBurger = (e) => {
    e.preventDefault()
      setIsShow(!isShow)
  }
  
  return (
    <header className={classNames("header", {"header--burger": isShow})}>
      <div className="container">
        <div className="header__block">
          
          <AnchorLink className="header__logo" href="#intro">Крысиные бега</AnchorLink>

          <nav className={classNames("header__links", {"active": isShow})}>
            <AnchorLink 
              className="header__link" 
              href="#about"
              onClick={() => setIsShow(false)}
            >
              О играх
            </AnchorLink>
            <div className="header__link header__link--games">
              <div className="header__list">
                <div>Игры</div>
                <div className="header__arr"></div>
              </div>
              <div className="header__games">
                <AnchorLink 
                  className="header__game" 
                  href="#game1"
                  onClick={() => setIsShow(false)}
                >
                  Крысиные бега I
                </AnchorLink>
                <AnchorLink 
                  className="header__game" 
                  href="#game2"
                  onClick={() => setIsShow(false)}
                >
                  Крысиные бега II
                </AnchorLink>
                <AnchorLink 
                  className="header__game" 
                  href="#game3"
                  onClick={() => setIsShow(false)}
                >
                  Крысиные бега III
                </AnchorLink>
                <AnchorLink 
                  className="header__game" 
                  href="#game4"
                  onClick={() => setIsShow(false)}
                >
                  Крысиные бега IV
                </AnchorLink>
                <AnchorLink 
                  className="header__game" 
                  href="#game_monopoly"
                  onClick={() => setIsShow(false)}
                >
                  Монополия
                </AnchorLink>
                <AnchorLink 
                  className="header__game" 
                  href="#forkids"
                  onClick={() => setIsShow(false)}
                >
                  Игра для детей
                </AnchorLink>
              </div>
            </div>
            <AnchorLink 
              className="header__link" 
              href="#advantage"
              onClick={() => setIsShow(false)}
            >
              Приемущества
            </AnchorLink>
            <AnchorLink 
              className="header__link" 
              href="#author"
              onClick={() => setIsShow(false)}
            >
              Автор
            </AnchorLink>
            <AnchorLink 
              className="header__link" 
              href="#contacts"
              onClick={() => setIsShow(false)}
            >
              Контакты
            </AnchorLink>
          </nav>

          <ToggleMenu
            isShow={isShow}
            toggleOnBurger={toggleOnBurger}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
