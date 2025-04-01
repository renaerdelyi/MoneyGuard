import s from './Header.module.css';
import Icon from '../Icon/Icon';
import { Link } from 'react-router-dom';
import useMedia from '../../hooks/useMedia';
import { useToggle } from '../../hooks/useToggle.jsx';
import LogOutModal from '../LogOutModal/LogOutModal';

function Header() {
    const { isMobile } = useMedia();
    const { openModal, isOpen, closeModal } = useToggle();

    return (
        <header className={s.header}>
            <div className={s.container}>
                <Link to="/" className={s.icon_wrap}>
                    {isMobile ? (
                        <Icon name="icon-logo_mobile" className={s.icon_mob} />
                    ) : (
                        <Icon name="icon-logo_tab_desk" className={s.icon_tab_desk} />
                    )}
                </Link>

                <ul className={s.wrapper}>
                    <li>Hello, Anonymous</li>
                    <li className={s.divider} />
                    <li>
                        <div className={s.wrap}>
                            <button className={s.btn} onClick={openModal}>
                                <Icon name="icon-exit" className={s.exit} />
                                {isMobile ? null : 'Exit'}
                            </button>
                            {isOpen && <LogOutModal closeModal={closeModal} />}
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
