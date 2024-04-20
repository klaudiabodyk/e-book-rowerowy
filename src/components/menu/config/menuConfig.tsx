import {Link} from "react-router-dom";
import { FaInstagram} from "react-icons/fa6";
import {MdOutlineMail} from "react-icons/md";
import {FaShoppingCart} from "react-icons/fa";
import "./../styles/styles.css";

export const navs = [
    <div>
        <div className={'header-contact'}>Kontakt</div>
    <nav>
        <Link style={{ animationDelay: "0.7s" }} to={'http://sklep.ebook-rowerowy.pl/'}><div className={'menu-row'}>Kup e-book <FaShoppingCart /></div></Link>
        <Link style={{ animationDelay: "0.8s" }} to={'mailto:kontakt@ebook-rowerowy.pl'}><div className={'menu-row'}>Email <MdOutlineMail /></div></Link>
        <Link style={{ animationDelay: "0.9s" }} to={'https://www.instagram.com/'}><div className={'menu-row'}>Instagram <FaInstagram /></div></Link>
    </nav>
    </div>,
];