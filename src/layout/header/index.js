import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWheat, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <div className="Header">
            <div className='logo'></div>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='searchIcon'/><input className="search" placeholder='Tìm kiếm sản phẩm'></input>
            <div className="menu">
                <div className="historyIcon">
                    <FontAwesomeIcon icon={faMoneyBillWheat} />{' Lịch Sử'}
                </div>
                <div className="menuIcon">
                    <FontAwesomeIcon icon={faHouse} />
                    {" Menu"}
                </div>
            </div>
        </div>
    );
}

export default Header;
