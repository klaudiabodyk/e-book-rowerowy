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
                        "section2" : "Opisuje szereg potencjalnych zagrożeń występujących podczas jazdy rowerem. Podpowiadam kiedy zachować szczególną ostrożność, jak wystrzegać się błędów. Wskazuję jak radzić sobie w różnych sytuacjach. Poruszam temat ubezpieczeń dla rowerzystów.",
                        "section3" : "Poznasz rodzaje zabezpieczeń do rowerów. Ich wady i zalety. Prawidłowe metody zapinania roweru. Miejsca, które niosą za sobą ryzyko kradzieży Twojego roweru oraz sposoby jak ustrzec się przed kradzieżą.",
                        "section4" : "Omawiam prawne aspekty związane z jazdą dzieci na rowerze. Karta rowerowa - czy i kiedy jest potrzebna? Daje wiele praktycznych porad, poprawiających bezpieczeństwo dzieci poruszających się rowerem.",
                        "section5" : "W tym rozdziale omawiam zakup roweru. Porównuje zakup przez internet i sklep stacjonarny. Wskazuje na co zwrócić uwagę, kupując rower używany oraz co możemy sami sprawdzić, żeby ustrzec się zakupowego błędu.",
                        "section6" : "Prostym językiem opisuje czynności, które może wykonać każdy przy swoim rowerze. Porady te pozwolą zaoszczędzić sporo pieniędzy. Odpowiem na pytanie czy warto korzystać z serwisów rowerowych.",
                        "section7" : "Cześć! Nazywam Marcin Rybczyński i jeżdżę rowerem. Od 2005 roku jestem związany z branżą rowerową. Mechanik, handlowiec, organizator szkoleń. Postanowiłem podzielić się swoim blisko 20-letnim doświadczeniem, połączyć wiele zagadnień i stworzyć wartościowy poradnik, w którym każdy rowerzysta znajdzie coś dla siebie!",
                        "section8" : "Dla każdego użytkownika roweru! Dla osób dojeżdżających rowerem do pracy, szkoły oraz traktujących rower jako formę rekreacji. Treść opracowywałem z myślą, aby była ona zrozumiała dla wszystkich. E-book pełni funkcję merytorycznego poradnika dla każdego rowerzysty!",
                        "section9" : "Zdobędziesz wiedzę, która bezpośrednio przekłada się na Twoje bezpieczeństwo podczas jazdy rowerem. E-book to ponad 90 stron ciekawych tematów, wiele przykładów z życia, merytoryczna treść, która sprawdzi się w praktyce. Na pewno znajdziesz w nim istotne dla siebie informacje. Będziesz bardziej świadomie użytkował swój rower. Jeśli jesteś rowerzystą, musisz go mieć!",
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