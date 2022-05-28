import React from "react"

import classNames from "classnames"

const ToggleMenu = ({isShow, toggleOnBurger}) => {
//     const [isShow, setIsShow] = useState(false)
   
// const toggleOnBurger = () => {
//     setIsShow(!isShow)
// }

// console.log("isShow", isShow);
// console.log("props", props);


    return (
        <button className={classNames("toggle", {"active": isShow})} onClick={toggleOnBurger} id="toggle" type="button">
                <span className="toggle__burger">Menu</span>
        </button>
    )
}

export default ToggleMenu