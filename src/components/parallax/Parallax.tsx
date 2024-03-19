import React, {useEffect} from "react";
import gsap from "gsap";
import {Observer} from "gsap/all";
import "./styles/styles.css";
import photo1 from "./assets/background/1.jpg";
import photo3 from "./assets/background/3.jpg";
import photo4 from "./assets/background/4.jpg";
import photo5 from "./assets/background/5.jpg";
import photo6 from "./assets/background/6.jpg";

import Menu from "../menu/Menu";
import {Link} from "react-router-dom";

type Section = {
    title: string;
    image: string;
    additional? : any;
};

const sections: Section[] = [
    { title: "Postaw na bezpieczeństwo", image: photo1, additional: <div className={'description'}>Dowiedz się jak zadbać o bezpieczeństwo na rowerze. Zostań bardziej świadomym rowerzystą, ale także kierowcą i pieszym. Poznasz aktualne przepisy, obowiązki, dobre nawyki bezpiecznego poruszania się rowerem, ale także zagrożenia czyhające na rowerzystów. Poruszam także wiele innych ciekawych tematów, które z pewnością Cię zainteresują! </div> },
    { title: "Zdobądź użyteczną wiedzę", image: photo6, additional: <div className={'description'}>Omawiam zakup roweru. Nowy czy używany? Na co zwrócić uwagę? Sklep stacjonarny czy internet — plusy i minusy. Dowiesz się również jak zabezpieczyć rower przed kradzieżą i zgłębimy temat ubezpieczeń. Powiemy też sobie o aspektach technicznych, jak zadbać o swoje dwa kółka i czy warto korzystać z serwisów rowerowych.  </div>  },
    { title: "Kim jestem?", image: photo4, additional: <div className={'description'}>Witaj w moim rowerowym świecie! Nazywam się Marcin Rybczyński. Z branżą rowerową jestem związany od blisko 20. lat. Głównie jako mechanik, ale też sprzedawca i szkoleniowiec z zakresu mechaniki rowerowej. Doświadczenie zdobywałem na rynku polskim, ale również niemieckim, gdzie ogromny nacisk kładzie się na bezpieczeństwo rowerzystów. Przez blisko dwie dekady poznałem mnóstwo problemów klientów, często błahych, gdzie rozwiązanie jest bardzo proste. W 2021 roku narodził się pomysł stworzenia e-booka, przy pomocy którego pragnę poszerzać świadomość użytkowników dwóch kółek.
        </div>  },
    { title: "Dla kogo ten e-book?", image: photo5, additional: <div className={'description'}>Dla każdego! Główną grupą docelową są oczywiście rowerzyści, osoby dojeżdżające rowerem do pracy czy szkoły jak oraz jeżdżący turystycznie. Jednak zmotoryzowani i piesi również mogą skorzystać, do czego gorąco zachęcam. Po pierwsze dlatego, że rowerzystą może stać się każdy, w każdym wieku. Drugą istotną kwestią jest znajomość praw innych uczestników ruchu, którzy też są pełnoprawnymi użytkownikami dróg. Treść e-booka opracowywałem z myślą, aby były one zrozumiałe dla wszystkich, a zwłaszcza dla tych, którzy traktują rower jako środek transportu i chcą czuć się bezpieczniej, a także zgłębić inne ciekawe rowerowe tematy.
        </div>   },
    { title: "Dlaczego warto?", image: photo3, additional: <div className={'long-description'}>Posiadanie wiedzy, która bezpośrednio przekłada się na bezpieczniejsze poruszanie się po drogach, chodnikach, ścieżkach rowerowych jest nieocenione. Z roku na rok przybywa użytkowników dróg. Zarówno rowerzystów, kierowców, użytkowników hulajnóg, jak i pieszych. Infrastruktura nie zawsze za tym nadąża. Wpływa to znacząco na natężenie ruchu, co z kolei ma ogromny wpływ na bezpieczeństwo. Świadomość zagrożeń, swoich praw i obowiązków względem pieszych i zmotoryzowanych sprawi, że poruszanie się naszym rowerem będzie dla nas i naszych bliskich znacznie bezpieczniejsze.
            Wskazówki jak zminimalizować ryzyko kradzieży roweru sprawią, że Twój rower będzie długo Twój. Podstawowa wiedza techniczna sprawia, że jazda rowerem staje się bezpieczniejsza, komfortowa, a także pozwala zaoszczędzić sporo pieniędzy, ponieważ bardziej świadomie użytkujemy swój rower. </div>  },
    { title: "Sklep internetowy", image: photo4, additional: <Link className={'button-buy'} to={'http://ebook-rowerowy.pl/shop-2/'}>KUP E-BOOK</Link>}
];

const Parallax = () => {
    // Use the useEffect hook to initialize GSAP when the component mounts
    useEffect(() => {
        gsapInit();
    }, []);

    // Initialize GSAP and set up the parallax effect
    const gsapInit = () => {
        // Register the Observer plugin with GSAP
        gsap.registerPlugin(Observer);

        // Select all sections and images in the DOM
        const sections = document.querySelectorAll<HTMLDivElement>("section");
        const images = document.querySelectorAll<HTMLDivElement>(".bg");
        const outerWrappers = gsap.utils.toArray<HTMLDivElement>(".outer");
        const innerWrappers = gsap.utils.toArray<HTMLDivElement>(".inner");
        let currentIndex = -1;
        const wrap = gsap.utils.wrap(0, sections.length);
        let animating: boolean = false;

        // Set initial styles for the outer and inner wrappers
        gsap.set(outerWrappers, { yPercent: 100 });
        gsap.set(innerWrappers, { yPercent: -100 });

        // Define a function to navigate to a specific section
        const gotoSection = (index: number, direction: number) => {
            index = wrap(index);
            animating = true;
            const fromTop = direction === -1;
            const dFactor = fromTop ? -1 : 1;
            const tl = gsap.timeline({
                defaults: { duration: 1.25, ease: "power1.inOut" },
                onComplete: () => {
                    animating = false;
                },
            });

            // Animate the current section out and the new section in
            if (currentIndex >= 0) {
                gsap.set(sections[currentIndex], { zIndex: 0 });
                tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
                    sections[currentIndex],
                    { autoAlpha: 0 }
                );
            }
            gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
            tl.fromTo(
                [outerWrappers[index], innerWrappers[index]],
                { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
                { yPercent: 0 },
                0
            ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

            currentIndex = index;
        };

        // Set up the Observer to handle user interactions
        Observer.create({
            type: "wheel,touch,pointer",
            wheelSpeed: -1,
            onDown: () => !animating && gotoSection(currentIndex - 1, -1),
            onUp: () => !animating && gotoSection(currentIndex + 1, 1),
            tolerance: 10,
            preventDefault: true,
        });

        // Start at the first section
        gotoSection(0, 1);
    };

    // Render the sections with their titles and images
    return (
        <>
            <Menu />
            {sections.map((section) => (
                <section key={section.title}>
                    <div className="outer">
                        <div className="inner">
                            <div
                                className="bg one"
                                style={{ backgroundImage: `url(${section.image})` }}
                            >
                                <h2>{section.title}</h2>
                                <div className={"icons"}>{section.additional}</div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
};

export default Parallax;
