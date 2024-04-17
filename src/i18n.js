import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "header": {
                        "section1": "POSTAW NA BEZPIECZEŃSTWO",
                        "section2": "WARTO ZNAĆ ZAGROŻENIA",
                        "section3": "TWÓJ ROWER TWOJA WŁASNOŚĆ",
                        "section4": "BEZPIECZEŃSTWO TWOJEGO DZIECKA",
                        "section5": "ZAKUP ROWERU",
                        "section6": "PORADNIK TECHNICZNY",
                        "section7": "KIM JESTEM?",
                        "section8": "DLA KOGO TEN E-BOOK?",
                        "section9": "DLACZEGO WARTO?",
                        "section10": "SKLEP INTERNETOWY"
                    },
                    "description": {
                        "section1" : "Dołącz do grona świadomych rowerzystów! Ciesz się bezpieczną jazdą na rowerze. Poznaj aktualne przepisy, dobre nawyki, akcesoria i najnowsze technologie wpływające na bezpieczeństwo cyklistów. O czym jeszcze się dowiesz?",
                        "section2" : "Opisuje szereg potencjalnych zagrożeń występujących podczas jazdy rowerem. Podpowiadam kiedy zachować szczególną ostrożność, jakich błędów się wystrzegać. Wskazuję jak radzić sobie w różnych sytuacjach. Poruszam temat ubezpieczeń dla rowerzystów.",
                        "section3" : "Poznasz rodzaje zabezpieczeń do rowerów. Ich wady i zalety. Prawidłowe metody zapinania roweru. Miejsca, które niosą za sobą ryzyko kradzieży oraz sposoby jak ustrzec się przed kradzieżą.",
                        "section4" : "Omawiam prawne aspekty związane z jazdą dzieci na rowerze. Karta rowerowa - czy i kiedy jest potrzebna? Daje wiele praktycznych porad poprawiających bezpieczeństwo dzieci poruszających się rowerem.",
                        "section5" : "W tym rozdziale omawiam zakup roweru. Porównuje zakup przez internet i sklep stacjonarny. Wskazuje na co zwrócić uwagę, kupując rower używany oraz co możemy sami sprawdzić, żeby ustrzec się zakupowego błędu.",
                        "section6" : "Prostym językiem opisuje czynności, które może wykonać każdy przy swoim rowerze. Porady te pozwolą zaoszczędzić sporo pieniędzy. Odpowiem na pytanie czy warto korzystać z serwisów rowerowych.",
                        "section7" : "Cześć! Nazywam się Marcin Rybczyński. Z branżą rowerową jestem związany od blisko 20 lat. Głównie jako mechanik, ale też handlowiec i szkoleniowiec. Doświadczenie zdobywałem na rynku polskim i niemieckim, gdzie ogromny nacisk kładzie się na bezpieczeństwo rowerzystów. W 2022 roku narodził się pomysł stworzenia rowerowego e-booka. Zapraszam Cię do mojego rowerowego świata!",
                        "section8" : "Dla każdego rowerzysty! Osób dojeżdżających rowerem do pracy, szkoły oraz traktujących rower jako forme rekreacji. Treść opracowywałem z myślą, aby była ona zrozumiała dla wszystkich. E-book pełni funkcję merytorycznegoŻ poradnika dla każdego rowerzysty!",
                        "section9" : "Posiadanie wiedzy, która bezpośrednio przekłada się na bezpieczniejsze poruszanie się rowerem jest nieocenione. W e-booku poruszam kilkanaście ciekawych tematów. Treść, którą przekazuje jest bardzo praktyczna. Z pewnością znajdziesz w nim istotne dla siebie informację. Będziesz bardziej świadomie użytkował swój rower. Jeśli jesteś cyklistą, musisz go mieć!",
                        "section10" : "KUP E-BOOK"
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