import React, {useEffect} from "react";
import gsap from "gsap";
import {Observer} from "gsap/all";
import "./styles/styles.css";
import photo1 from "./assets/background/1.jpg";
import photo3 from "./assets/background/3.jpg";
import photo4 from "./assets/background/4.jpg";
import photo5 from "./assets/background/5.jpg";
import photo6 from "./assets/background/6.jpg";
import photo8 from "./assets/background/8.jpg";
import photo9 from "./assets/background/9.jpg";
import photo10 from "./assets/background/10.jpg";

import Menu from "../menu/Menu";
import {Link} from "react-router-dom";
import i18n from "../../i18n";

type Section = {
    title: string;
    image: string;
    additional? : any;
};

const sections: Section[] = [
    { title: i18n.t("sekcja1"), image: photo1, additional: <div className={'description'}>{i18n.t("subHeader.sekcja1")}</div>},
    { title: i18n.t("sekcja2"), image: photo6, additional: <div className={'description'}>{i18n.t("subHeader.sekcja2")}</div>},
    { title: i18n.t("sekcja3"), image: photo8, additional: <div className={'long-description'}>Lorum ipsum </div>},
    { title: i18n.t("sekcja4"), image: photo9, additional: <div className={'long-description'}>Lorum ipsum </div>},
    { title: i18n.t("sekcja5"), image: photo10, additional: <div className={'long-description'}>Lorum ipsum </div>},
    { title: i18n.t("sekcja6"), image: photo4, additional: <div className={'description'}>{i18n.t("subHeader.sekcja6")}</div>},
    { title: i18n.t("sekcja7"), image: photo5, additional: <div className={'description'}>{i18n.t("subHeader.sekcja7")}</div>},
    { title: i18n.t("sekcja8"), image: photo3, additional: <div className={'long-description'}>{i18n.t("subHeader.sekcja8")}</div>},
     { title: i18n.t("sekcja9"), image: photo4, additional: <Link className={'button-buy'} to={'http://ebook-rowerowy.pl/shop-2/'}>{i18n.t("subHeader.sekcja9")}</Link>}
];

const Parallax = () => {
    useEffect(() => {
        gsapInit();
    }, []);

    // Initialize GSAP and set up the parallax effect
    const gsapInit = () => {
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
