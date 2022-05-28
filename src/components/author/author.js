import * as React from "react"
import author from "../../images/author.png"

const Author = () => {
    return (
        <section className="author" id="author">
            <div className="container">
                <div className="author__block">
                    <div className="author__photo">
                        <img src={author} alt="Автор игр"/>
                    </div>
                    <div className="author__info">
                        <h1 className="author__title">автор игр</h1>
                        <div className="author__subtitle">Здравствуйте! <br/>Я - Станислав Строителев</div>
                        <div className="author__description">
                            <div className="author__separation">
                                <p>Член Национального Союза Журналистов Украины</p>
                                <p>Член Союза Рекламистов Украины</p>
                            </div>
                            <div className="author__separation">
                                <p>Учредитель и издатель множества газет и журналов, таких как "Рекламный вестник", "Вся мебель Украины", "SMS - Ceкреты Мобильной Cвязи", "Shopping".</p>
                                <p className="author__lastp">Член наблюдательного совета при комитете Телевидения, Радиовещания и Информационной политики Украины</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Author