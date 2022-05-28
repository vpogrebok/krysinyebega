/* Крысиные бега 1 */
import Img from "../images/KB1/korobka1.png"
import Img2 from "../images/KB1/korobka1 copy 2.png"
import Img3 from "../images/KB1/korob.png"

/* Крысиные бега 2 */
import Img4 from "../images/KB2/korobka2 1.png"
import Img5 from "../images/KB2/korobka1.png"
import Img6 from "../images/KB2/korob.png"

/* Крысиные бега 3 */
import Img7 from "../images/KB3/korobka3 1.jpg"
import Img8 from "../images/KB3/korobka1 copy 3.png"
import Img9 from "../images/KB3/korobka1 copy 4.png"
import Img10 from "../images/KB3/korobka1 copy 5.png"

/* Крысиные бега 4 */
import Img11 from "../images/KB4/korob.png"
import Img12 from "../images/KB4/korobka1 copy 6.png"
import Img13 from "../images/KB4/korobka1 copy 7.png"
import Img14 from "../images/KB4/korobka3 1.jpg"

/* Монополия */
import Img15 from "../images/Monopoly/korobka6 1.png"
import Img16 from "../images/Monopoly/korob.png"
import Img17 from "../images/Monopoly/korobka1 copy 7.png"
import Img18 from "../images/Monopoly/korobka3 1.jpg"

export const productsData = [
    {
        id: "game1",
        title: "крысиные бега i",
        block: "Это <span>первый шаг</span>,к финансовой грамотности и материальному благополучию",
        info: "Эта игра специально создана для людей, которые вынуждены каждое утро вставать и идти на работу, чтобы в конце месяца получить свою жалкую зарплату. Эта игра для тех, кто прекрасно понимает.",
        price: "1400 грн",
        isActive: false,
        images: [
            {image: Img},
            {image: Img2},
            {image: Img3},
            {image: Img2}
        ]
    },

    {
        id: "game2",
        title: "крысиные бега iI", 
        block: "Это <span>продолжение игры «Крысиные бега I»</span>, рекомендуемое только после освоения первой версии",
        info: "Эта игра более сложна, но дает больше полезных знаний. Она охватывает путь человека от самого безнадежного «треудового рабства» — до абсолютной финансовой свободы, богатства и роскоши.",
        price: "1400 грн",
        isActive: true,
        images: [
            {image: Img4},
            {image: Img5},
            {image: Img6},
            {image: Img2}
        ]
    },

    {
        id: "game3",
        title: "крысиные бега iII", 
        block: "Игра для бизнесменов и предпринимателей, которые нуждаются в рецептах, <span>как защитить свой бизнес во время кризиса</span>",
        info: "Эта игра покажет, какие бизнесы расцветают на почве кризиса, а какие задыхаются, какие бизнесы устойчивы, а какие нет, в какие стоит вкладывать деньги, а в какие не стоит.",
        price: "1400 грн",
        isActive: false,
        images: [
            {image: Img7},
            {image: Img8},
            {image: Img9},
            {image: Img10}
        ]
    },

    {
        id: "game4",
        title: "крысиные бега iV", 
        block: "Это самая новая, самая современная и <span>самая актуальная</span> из всех существующих игр!",
        info: "Вместо уже устаревших методов заработка и накопления первичного капитала, здесь представлены самые новые, самые свежие и самые актуальные схемы, идеи и методы заработка.",
        price: "1400 грн",
        isActive: true,
        images: [
            {image: Img11},
            {image: Img12},
            {image: Img13},
            {image: Img14}
        ]
    },

    {
        id: "game_monopoly",
        title: "Корпорация", 
        block: "Захватывающая игра, созданная специально для <span>совместного семейного досуга</span> и развлечения детей и взрослых. ",
        info: "При этом она одинаково интересна и взрослым, и детям. Она очень сильно отличается от всех остальных игр под торговой маркой «Крысиные бега». Это единственная не обучающая, а чисто развлекательная игра.",
        price: "1400 грн",
        isActive: false,
        images: [
            {image: Img15},
            {image: Img16},
            {image: Img17},
            {image: Img18}
        ]
    }
]