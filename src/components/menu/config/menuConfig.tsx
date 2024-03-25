import {Link} from "react-router-dom";
import { FaInstagram} from "react-icons/fa6";
import {MdOutlineMail} from "react-icons/md";
import {FaShoppingCart} from "react-icons/fa";

export const navs = [
    <div>
        <h2>Kontakt</h2>
    <nav>
    <Link style={{ animationDelay: "0.7s" }} to={'http://ebook-rowerowy.pl/shop-2/'}>Kup e-book <FaShoppingCart /></Link>
    <Link style={{ animationDelay: "0.8s" }} to={'mailto:kontakt@ebook-rowerowy.pl'}>Email <MdOutlineMail /></Link>
    <Link style={{ animationDelay: "0.9s" }} to={'https://www.instagram.com/'}>Instagram <FaInstagram /></Link>
    </nav>
    </div>,
];