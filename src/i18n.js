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
                        "section1" : "Ciesz się bezpieczną jazdą na rowerze. Poznaj aktualne przepisy, dobre nawyki, zachowania, akcesoria i najnowsze technologie wpływające na bezpieczeństwo podczas jazdy rowerem. Dołącz do grona świadomych rowerzystów! To nie wszystko! O czym jeszcze się dowiesz?",
                        "section2" : "Opisuje szereg potencjalnych zagrożeń występujących podczas jazdy rowerem. Podpowiadam kiedy zachować szczególną ostrożność oraz jak wystrzegać się błędów. Wskazuję jak radzić sobie w różnych sytuacjach. Poruszam temat ubezpieczeń dla rowerzystów.",
                        "section3" : "Poznasz rodzaje zabezpieczeń do rowerów, ich wady i zalety. Zdobędziesz wiedzę jak prawidłowo przypinać swój rower. Wskazuję na miejsca, które niosą za sobą większe ryzyko kradzieży roweru, a także jakie działania podejmować, aby Twój rower pozostał Twój.",
                        "section4" : "Poznaj ważne aspekty związane z jazdą dzieci na rowerze. Karta rowerowa - czy i kiedy jest potrzebna? Omawiam przepisy, daje wiele praktycznych porad, które poprawią bezpieczeństwo Twojego dziecka, kiedy porusza się ono rowerem.",
                        "section5" : "W tym rozdziale pomogę kupić Ci rower. Zestawiam zakup przez internet ze sklepem stacjonarnym. Podpowiadam czym warto się kierować. Wskazuje na co zwrócić uwagę, kupując rower używany oraz co i w jaki sposób możemy sami sprawdzić, żeby ustrzec się zakupowego błędu.",
                        "section6" : "Prostym językiem opisuję czynności, które może wykonać każdy przy swoim rowerze. Dowiesz się także, co rowerom szkodzi. Posiadając taką wiedzę, uchronisz się przed kosztownymi naprawami. Odpowiem na pytanie czy warto korzystać z serwisów rowerowych.",
                        "section7" : "Cześć! Nazywam Marcin Rybczyński i jeżdżę rowerem. Od 2005 roku jestem związany z branżą rowerową jako mechanik, handlowiec, organizator szkoleń, freelancer. Postanowiłem podzielić się swoim blisko 20-letnim doświadczeniem, połączyć wiele zagadnień i stworzyć prosty, a zarazem wartościowy poradnik, w którym każdy rowerzysta znajdzie coś dla siebie!",
                        "section8" : "Dla każdego kto ma rower lub chce go mieć. Dla osób dojeżdżających rowerem do pracy lub szkoły, traktujących rower jako formę rekreacji i spędzania wolnego czasu. Treść opracowywałem z myślą, aby była ona zrozumiała dla wszystkich. E-book pełni funkcję praktycznego poradnika dla każdego rowerzysty!",
                        "section9" : "Zdobędziesz wiedzę, która bezpośrednio przełoży się na poprawę Twojego bezpieczeństwa, podczas jazdy rowerem. E-book to 95 stron ciekawych tematów, wiele przykładów z życia, merytoryczna treść, która sprawdzi się w praktyce. Znajdziesz w nim istotne dla siebie informacje. Będziesz bardziej świadomie użytkował swój rower. Warto wiedzieć!",
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