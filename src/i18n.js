import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "sekcja1": "Postaw na bezpieczeństwo",
                    "sekcja2": "Zdobądź użyteczną wiedzę",
                    "sekcja3": "Cokolwiek",
                    "sekcja4": "Cokolwiek",
                    "sekcja5": "Cokolwiek",
                    "sekcja6": "Kim jestem ?",
                    "sekcja7": "Dla kogo ten e-book?",
                    "sekcja8": "Dlaczego warto?",
                    "sekcja9": "Sklep internetowy",
                    "subHeader": {
                        "sekcja1" : "Dowiedz się jak zadbać o bezpieczeństwo na rowerze. Zostań bardziej świadomym rowerzystą, ale także kierowcą i pieszym. Poznasz aktualne przepisy, obowiązki, dobre nawyki bezpiecznego poruszania się rowerem, ale także zagrożenia czyhające na rowerzystów. Poruszam także wiele innych ciekawych tematów, które z pewnością Cię zainteresują! ",
                        "sekcja2" : "Omawiam zakup roweru. Nowy czy używany? Na co zwrócić uwagę? Sklep stacjonarny czy internet — plusy i minusy. Dowiesz się również jak zabezpieczyć rower przed kradzieżą i zgłębimy temat ubezpieczeń. Powiemy też sobie o aspektach technicznych, jak zadbać o swoje dwa kółka i czy warto korzystać z serwisów rowerowych.",
                        "sekcja6" : "Witaj w moim rowerowym świecie! Nazywam się Marcin Rybczyński. Z branżą rowerową jestem związany od blisko 20. lat. Głównie jako mechanik, ale też sprzedawca i szkoleniowiec z zakresu mechaniki rowerowej. Doświadczenie zdobywałem na rynku polskim, ale również niemieckim, gdzie ogromny nacisk kładzie się na bezpieczeństwo rowerzystów. Przez blisko dwie dekady poznałem mnóstwo problemów klientów, często błahych, gdzie rozwiązanie jest bardzo proste. W 2021 roku narodził się pomysł stworzenia e-booka, przy pomocy którego pragnę poszerzać świadomość użytkowników dwóch kółek.",
                        "sekcja4" : "",
                        "sekcja5" : "",
                        "sekcja3" : "",
                        "sekcja7" : "Dla każdego! Główną grupą docelową są oczywiście rowerzyści, osoby dojeżdżające rowerem do pracy czy szkoły jak oraz jeżdżący turystycznie. Jednak zmotoryzowani i piesi również mogą skorzystać, do czego gorąco zachęcam. Po pierwsze dlatego, że rowerzystą może stać się każdy, w każdym wieku. Drugą istotną kwestią jest znajomość praw innych uczestników ruchu, którzy też są pełnoprawnymi użytkownikami dróg. Treść e-booka opracowywałem z myślą, aby były one zrozumiałe dla wszystkich, a zwłaszcza dla tych, którzy traktują rower jako środek transportu i chcą czuć się bezpieczniej, a także zgłębić inne ciekawe rowerowe tematy.",
                        "sekcja8" : "Posiadanie wiedzy, która bezpośrednio przekłada się na bezpieczniejsze poruszanie się po drogach, chodnikach, ścieżkach rowerowych jest nieocenione. Z roku na rok przybywa użytkowników dróg. Zarówno rowerzystów, kierowców, użytkowników hulajnóg, jak i pieszych. Infrastruktura nie zawsze za tym nadąża. Wpływa to znacząco na natężenie ruchu, co z kolei ma ogromny wpływ na bezpieczeństwo. Świadomość zagrożeń, swoich praw i obowiązków względem pieszych i zmotoryzowanych sprawi, że poruszanie się naszym rowerem będzie dla nas i naszych bliskich znacznie bezpieczniejsze. Wskazówki jak zminimalizować ryzyko kradzieży roweru sprawią, że Twój rower będzie długo Twój. Podstawowa wiedza techniczna sprawia, że jazda rowerem staje się bezpieczniejsza, komfortowa, a także pozwala zaoszczędzić sporo pieniędzy, ponieważ bardziej świadomie użytkujemy swój rower. ",
                        "sekcja9" : "KUP E-BOOK",
                    }
                }
            },
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        }
    }).then(r => console.log("i18n initialized"));

export default i18n;