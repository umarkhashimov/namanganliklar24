
import { Link } from "react-router"
import telegramLogo from '../assets/cib_telegram.png'
import searchIcon from '../assets/mdi_magnify.png'
import RussianFlag from '../assets/cif_ru.png'
import navbarBanner from '../assets/Rectangle 3.jpg'
function Navbar() {

    return (
        <>
            <div className="my-navbar pt-4 pb-4">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-3">
                            <Link to='/' className="navbar-logo">NAMANGANLIKLAR24</Link>
                            <div className="d-flex gap-3 currencies">
                                <p className="d-inline"><span>$</span> 1000.2</p>
                                <p className="d-inline"><span>P</span> 138.26</p>
                                <p className="d-inline"><span>E</span> 10988.72</p>
                            </div>
                        </div>
                        <div className="d-flex gap-3">
                            <button type="button" className="navbar-btn"><img src={searchIcon} alt="" /></button>
                            <button type="button" className="navbar-btn d-flex align-items-center gap-1"><img src={RussianFlag} alt="" />РУ</button>
                            <Link to='https://t.me/fayz_umar_g1' type="button" className="navbar-telegram"><img src={telegramLogo} className="me-2" alt="" />Подписатся</Link>
                        </div>
                    </div>
                    <div className="bg-white">
                        <ul className="list-unstyled d-flex justify-content-evenly navbar-links py-3 mt-4">
                            <li><Link>Узбекистана</Link></li>
                            <li><Link>Мир</Link></li>
                            <li><Link>Экономика</Link></li>
                            <li><Link className="active">Политика</Link></li>
                            <li><Link>Общество</Link></li>
                            <li><Link>Технологии</Link></li>
                            <li><Link>Спорт</Link></li>
                            <li><Link>Культура</Link></li>
                            <li><Link>Проишествия</Link></li>
                            <li><Link>Туризм</Link></li>
                        </ul>
                    </div>
                    <div>
                        <img src={navbarBanner} className="img-fluid w-100 navbar-banner" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar