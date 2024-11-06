export default class DetailsService {
    async fetchDevelopers() {
        return [
            {
                developer_id: 1,
                developer_name: "Square",
                developer_description: "Square was a Japanese video game developer known for creating the Final Fantasy series and other classic RPG titles. It later merged with Enix to become Square Enix.",
                developer_country: "JP"
            },
            {
                developer_id: 2,
                developer_name: "Nintendo",
                developer_description: "Nintendo is a leading Japanese video game company responsible for developing iconic franchises such as Mario, Zelda, and Metroid. They have also partnered in publishing various RPG titles.",
                developer_country: "JP"
            },
            {
                developer_id: 3,
                developer_name: "Capcom",
                developer_description: "Capcom is a renowned Japanese game developer known for franchises like Street Fighter, Resident Evil, and Mega Man. They are influential in action and fighting game genres.",
                developer_country: "JP"
            },
            {
                developer_id: 4,
                developer_name: "Konami",
                developer_description: "Konami is a Japanese entertainment company famous for the Metal Gear, Castlevania, and Silent Hill series. They have also developed several sports and rhythm games.",
                developer_country: "JP"
            }
        ];
    }

    async fetchPublishers() {
        return [
            {
                publisher_id: 1,
                publisher_name: "Square",
                publisher_description: "Square was the original publisher of the early Final Fantasy games, including Final Fantasy III. They played a significant role in popularizing the JRPG genre worldwide.",
                publisher_country: "JP"
            },
            {
                publisher_id: 2,
                publisher_name: "Enix",
                publisher_description: "Enix, known for publishing the Dragon Quest series, later merged with Square to form Square Enix. They were influential in shaping the RPG market in Japan and internationally.",
                publisher_country: "JP"
            },
            {
                publisher_id: 3,
                publisher_name: "Nintendo",
                publisher_description: "Nintendo published several iconic games and partnered with Square for the release of Final Fantasy titles on their platforms, boosting the series' global reach.",
                publisher_country: "JP"
            },
            {
                publisher_id: 4,
                publisher_name: "Electronic Arts",
                publisher_description: "Electronic Arts has a history of publishing a wide range of successful video game franchises across various genres. They were involved in the distribution of Square titles in the Western markets.",
                publisher_country: "US"
            }
        ];
    }

    async fetchCountries() {
        return [
            {country_name: "Afghanistan", country_code: "AF"}, {country_name: "Åland Islands", country_code: "AX"}, {country_name: "Albania", country_code: "AL"}, {country_name: "Algeria", country_code: "DZ"}, {country_name: "American Samoa", country_code: "AS"}, {country_name: "Andorra", country_code: "AD"}, {country_name: "Angola", country_code: "AO"}, {country_name: "Anguilla", country_code: "AI"}, {country_name: "Antarctica", country_code: "AQ"}, {country_name: "Antigua and Barbuda", country_code: "AG"}, {country_name: "Argentina", country_code: "AR"}, {country_name: "Armenia", country_code: "AM"}, {country_name: "Aruba", country_code: "AW"}, {country_name: "Australia", country_code: "AU"}, {country_name: "Austria", country_code: "AT"}, {country_name: "Azerbaijan", country_code: "AZ"}, {country_name: "Bahamas", country_code: "BS"}, {country_name: "Bahrain", country_code: "BH"}, {country_name: "Bangladesh", country_code: "BD"}, {country_name: "Barbados", country_code: "BB"}, {country_name: "Belarus", country_code: "BY"}, {country_name: "Belgium", country_code: "BE"}, {country_name: "Belize", country_code: "BZ"}, {country_name: "Benin", country_code: "BJ"}, {country_name: "Bermuda", country_code: "BM"}, {country_name: "Bhutan", country_code: "BT"}, {country_name: "Bolivia", country_code: "BO"}, {country_name: "Bosnia and Herzegovina", country_code: "BA"}, {country_name: "Botswana", country_code: "BW"}, {country_name: "Bouvet Island", country_code: "BV"}, {country_name: "Brazil", country_code: "BR"}, {country_name: "British Indian Ocean Territory", country_code: "IO"}, {country_name: "British Virgin Islands", country_code: "VG"}, {country_name: "Brunei", country_code: "BN"}, {country_name: "Bulgaria", country_code: "BG"}, {country_name: "Burkina Faso", country_code: "BF"}, {country_name: "Burundi", country_code: "BI"}, {country_name: "Cambodia", country_code: "KH"}, {country_name: "Cameroon", country_code: "CM"}, {country_name: "Canada", country_code: "CA"}, {country_name: "Cape Verde", country_code: "CV"}, {country_name: "Caribbean Netherlands", country_code: "BQ"}, {country_name: "Cayman Islands", country_code: "KY"}, {country_name: "Central African Republic", country_code: "CF"}, {country_name: "Chad", country_code: "TD"}, {country_name: "Chile", country_code: "CL"}, {country_name: "China", country_code: "CN"}, {country_name: "Christmas Island", country_code: "CX"}, {country_name: "Cocos {country_name: Keeling) Islands", country_code: "CC"}, {country_name: "Colombia", country_code: "CO"}, {country_name: "Comoros", country_code: "KM"}, {country_name: "Cook Islands", country_code: "CK"}, {country_name: "Costa Rica", country_code: "CR"}, {country_name: "Croatia", country_code: "HR"}, {country_name: "Cuba", country_code: "CU"}, {country_name: "Curacao", country_code: "CW"}, {country_name: "Cyprus", country_code: "CY"}, {country_name: "Czechia", country_code: "CZ"}, {country_name: "Democratic Republic of the Congo", country_code: "CD"}, {country_name: "Denmark", country_code: "DK"}, {country_name: "Djibouti", country_code: "DJ"}, {country_name: "Dominica", country_code: "DM"}, {country_name: "Dominican Republic", country_code: "DO"}, {country_name: "East Timor", country_code: "TL"}, {country_name: "Ecuador", country_code: "EC"}, {country_name: "Egypt", country_code: "EG"}, {country_name: "El Salvador", country_code: "SV"}, {country_name: "Equatorial Guinea", country_code: "GQ"}, {country_name: "Eritrea", country_code: "ER"}, {country_name: "Estonia", country_code: "EE"}, {country_name: "Eswatini", country_code: "SZ"}, {country_name: "Ethiopia", country_code: "ET"}, {country_name: "Falkland Islands", country_code: "FK"}, {country_name: "Faroe Islands", country_code: "FO"}, {country_name: "Federated States of Micronesia", country_code: "FM"}, {country_name: "Fiji", country_code: "FJ"}, {country_name: "Finland", country_code: "FI"}, {country_name: "France", country_code: "FR"}, {country_name: "French Guiana", country_code: "GF"}, {country_name: "French Polynesia", country_code: "PF"}, {country_name: "French Southern and Antarctic Lands", country_code: "TF"}, {country_name: "Gabon", country_code: "GA"}, {country_name: "Gambia", country_code: "GM"}, {country_name: "Georgia", country_code: "GE"}, {country_name: "Germany", country_code: "DE"}, {country_name: "Ghana", country_code: "GH"}, {country_name: "Gibraltar", country_code: "GI"}, {country_name: "Greece", country_code: "GR"}, {country_name: "Greenland", country_code: "GL"}, {country_name: "Grenada", country_code: "GD"}, {country_name: "Guadeloupe", country_code: "GP"}, {country_name: "Guam", country_code: "GU"}, {country_name: "Guatemala", country_code: "GT"}, {country_name: "Guernsey", country_code: "GG"}, {country_name: "Guinea", country_code: "GN"}, {country_name: "Guinea-Bissau", country_code: "GW"}, {country_name: "Guyana", country_code: "GY"}, {country_name: "Haiti", country_code: "HT"}, {country_name: "Heard Island and McDonald Islands", country_code: "HM"}, {country_name: "Honduras", country_code: "HN"}, {country_name: "Hong Kong", country_code: "HK"}, {country_name: "Hungary", country_code: "HU"}, {country_name: "Iceland", country_code: "IS"}, {country_name: "India", country_code: "IN"}, {country_name: "Indonesia", country_code: "ID"}, {country_name: "Iran", country_code: "IR"}, {country_name: "Iraq", country_code: "IQ"}, {country_name: "Ireland", country_code: "IE"}, {country_name: "Isle of Man", country_code: "IM"}, {country_name: "Israel", country_code: "IL"}, {country_name: "Italy", country_code: "IT"}, {country_name: "Ivory Coast", country_code: "CI"}, {country_name: "Jamaica", country_code: "JM"}, {country_name: "Japan", country_code: "JP"}, {country_name: "Jersey", country_code: "JE"}, {country_name: "Jordan", country_code: "JO"}, {country_name: "Kazakhstan", country_code: "KZ"}, {country_name: "Kenya", country_code: "KE"}, {country_name: "Kiribati", country_code: "KI"}, {country_name: "Kosovo", country_code: "XK"}, {country_name: "Kuwait", country_code: "KW"}, {country_name: "Kyrgyzstan", country_code: "KG"}, {country_name: "Laos", country_code: "LA"}, {country_name: "Latvia", country_code: "LV"}, {country_name: "Lebanon", country_code: "LB"}, {country_name: "Lesotho", country_code: "LS"}, {country_name: "Liberia", country_code: "LR"}, {country_name: "Libya", country_code: "LY"}, {country_name: "Liechtenstein", country_code: "LI"}, {country_name: "Lithuania", country_code: "LT"}, {country_name: "Luxembourg", country_code: "LU"}, {country_name: "Macao", country_code: "MO"}, {country_name: "Madagascar", country_code: "MG"}, {country_name: "Malawi", country_code: "MW"}, {country_name: "Malaysia", country_code: "MY"}, {country_name: "Maldives", country_code: "MV"}, {country_name: "Mali", country_code: "ML"}, {country_name: "Malta", country_code: "MT"}, {country_name: "Marshall Islands", country_code: "MH"}, {country_name: "Martinique", country_code: "MQ"}, {country_name: "Mauritania", country_code: "MR"}, {country_name: "Mauritius", country_code: "MU"}, {country_name: "Mayotte", country_code: "YT"}, {country_name: "Mexico", country_code: "MX"}, {country_name: "Moldova", country_code: "MD"}, {country_name: "Mongolia", country_code: "MN"}, {country_name: "Montenegro", country_code: "ME"}, {country_name: "Montserrat", country_code: "MS"}, {country_name: "Morocco", country_code: "MA"}, {country_name: "Mozambique", country_code: "MZ"}, {country_name: "Myanmar", country_code: "MM"}, {country_name: "Namibia", country_code: "NA"}, {country_name: "Nauru", country_code: "NR"}, {country_name: "Nepal", country_code: "NP"}, {country_name: "Netherlands", country_code: "NL"}, {country_name: "New Caledonia", country_code: "NC"}, {country_name: "New Zealand", country_code: "NZ"}, {country_name: "Nicaragua", country_code: "NI"}, {country_name: "Niger", country_code: "NE"}, {country_name: "Nigeria", country_code: "NG"}, {country_name: "Niue", country_code: "NU"}, {country_name: "Norfolk Island", country_code: "NF"}, {country_name: "North Korea", country_code: "KP"}, {country_name: "North Macedonia", country_code: "MK"}, {country_name: "Northern Mariana Islands", country_code: "MP"}, {country_name: "Norway", country_code: "NO"}, {country_name: "Oman", country_code: "OM"}, {country_name: "Pakistan", country_code: "PK"}, {country_name: "Palau", country_code: "PW"}, {country_name: "Palestine", country_code: "PS"}, {country_name: "Panama", country_code: "PA"}, {country_name: "Papua New Guinea", country_code: "PG"}, {country_name: "Paraguay", country_code: "PY"}, {country_name: "Peru", country_code: "PE"}, {country_name: "Philippines", country_code: "PH"}, {country_name: "Pitcairn Islands", country_code: "PN"}, {country_name: "Poland", country_code: "PL"}, {country_name: "Portugal", country_code: "PT"}, {country_name: "Principality of Monaco", country_code: "MC"}, {country_name: "Puerto Rico", country_code: "PR"}, {country_name: "Qatar", country_code: "QA"}, {country_name: "Republic of the Congo", country_code: "CG"}, {country_name: "Reunion", country_code: "RE"}, {country_name: "Romania", country_code: "RO"}, {country_name: "Russia", country_code: "RU"}, {country_name: "Rwanda", country_code: "RW"}, {country_name: "Saint Barthelemy", country_code: "BL"}, {country_name: "Saint Helena, country_code: Ascension and Tristan da Cunha", country_code: "SH"}, {country_name: "Saint Kitts and Nevis", country_code: "KN"}, {country_name: "Saint Lucia", country_code: "LC"}, {country_name: "Saint Martin", country_code: "MF"}, {country_name: "Saint Pierre and Miquelon", country_code: "PM"}, {country_name: "Saint Vincent and the Grenadines", country_code: "VC"}, {country_name: "Samoa", country_code: "WS"}, {country_name: "San Marino", country_code: "SM"}, {country_name: "Sao Tome and Principe", country_code: "ST"}, {country_name: "Saudi Arabia", country_code: "SA"}, {country_name: "Senegal", country_code: "SN"}, {country_name: "Serbia", country_code: "RS"}, {country_name: "Seychelles", country_code: "SC"}, {country_name: "Sierra Leone", country_code: "SL"}, {country_name: "Singapore", country_code: "SG"}, {country_name: "Sint Maarten", country_code: "SX"}, {country_name: "Slovakia", country_code: "SK"}, {country_name: "Slovenia", country_code: "SI"}, {country_name: "Solomon Islands", country_code: "SB"}, {country_name: "Somalia", country_code: "SO"}, {country_name: "South Africa", country_code: "ZA"}, {country_name: "South Georgia and South Sandwich Islands", country_code: "GS"}, {country_name: "South Korea", country_code: "KR"}, {country_name: "South Sudan", country_code: "SS"}, {country_name: "Spain", country_code: "ES"}, {country_name: "Sri Lanka", country_code: "LK"}, {country_name: "Sudan", country_code: "SD"}, {country_name: "Suriname", country_code: "SR"}, {country_name: "Svalbard", country_code: "SJ"}, {country_name: "Sweden", country_code: "SE"}, {country_name: "Switzerland", country_code: "CH"}, {country_name: "Syria", country_code: "SY"}, {country_name: "Taiwan", country_code: "TW"}, {country_name: "Tajikistan", country_code: "TJ"}, {country_name: "Tanzania", country_code: "TZ"}, {country_name: "Thailand", country_code: "TH"}, {country_name: "Togo", country_code: "TG"}, {country_name: "Tokelau", country_code: "TK"}, {country_name: "Tonga", country_code: "TO"}, {country_name: "Trinidad and Tobago", country_code: "TT"}, {country_name: "Tunisia", country_code: "TN"}, {country_name: "Turkey", country_code: "TR"}, {country_name: "Turkmenistan", country_code: "TM"}, {country_name: "Turks and Caicos Islands", country_code: "TC"}, {country_name: "Tuvalu", country_code: "TV"}, {country_name: "Uganda", country_code: "UG"}, {country_name: "Ukraine", country_code: "UA"}, {country_name: "United Arab Emirates", country_code: "AE"}, {country_name: "United Kingdom", country_code: "GB"}, {country_name: "United States Minor Outlying Islands", country_code: "UM"}, {country_name: "United States of America", country_code: "US"}, {country_name: "Uruguay", country_code: "UY"}, {country_name: "Uzbekistan", country_code: "UZ"}, {country_name: "Vanuatu", country_code: "VU"}, {country_name: "Vatican City", country_code: "VA"}, {country_name: "Venezuela", country_code: "VE"}, {country_name: "Vietnam", country_code: "VN"}, {country_name: "Virgin Islands", country_code: "VI"}, {country_name: "Wallis and Futuna", country_code: "WF"}, {country_name: "Western Sahara", country_code: "EH"}, {country_name: "Yemen", country_code: "YE"}, {country_name: "Zambia", country_code: "ZM"}, {country_name: "Zimbabwe", country_code: "ZW"}
        ];
    }

    async fetchGenres() {
        return [
            { genre_id: 1, genre_name: "Action" },
            { genre_id: 2, genre_name: "Adventure" },
            { genre_id: 3, genre_name: "Role-Playing" },
            { genre_id: 4, genre_name: "Simulation" },
            { genre_id: 5, genre_name: "Strategy" },
            { genre_id: 6, genre_name: "Sports" },
            { genre_id: 7, genre_name: "Puzzle" },
            { genre_id: 8, genre_name: "Shooter" },
            { genre_id: 9, genre_name: "Fighting" },
            { genre_id: 10, genre_name: "Racing" },
            { genre_id: 11, genre_name: "Platformer" }
        ];
    }

    async fetchPlatforms() {
        return [
            {
                platform_id: 1,
                platform_name: "Nintendo Entertainment System (NES)",
                platform_description: "A popular 8-bit home video game console developed by Nintendo, released in the 1980s.",
                releasedate: "1983-07-15"
            },
            {
                platform_id: 2,
                platform_name: "Super Nintendo Entertainment System (SNES)",
                platform_description: "A 16-bit home video game console developed by Nintendo, known for classic titles like Super Mario World.",
                releasedate: "1990-11-21"
            },
            {
                platform_id: 3,
                platform_name: "PlayStation",
                platform_description: "Sony's first home video game console, which introduced 3D polygon graphics to mainstream gaming.",
                releasedate: "1994-12-03"
            },
            {
                platform_id: 4,
                platform_name: "PlayStation 2",
                platform_description: "The best-selling video game console of all time, known for a vast library of diverse games.",
                releasedate: "2000-03-04"
            },
            {
                platform_id: 5,
                platform_name: "Xbox",
                platform_description: "Microsoft's first entry into the gaming console market, featuring online multiplayer with Xbox Live.",
                releasedate: "2001-11-15"
            },
            {
                platform_id: 6,
                platform_name: "PC",
                platform_description: "A versatile gaming platform with a wide range of hardware configurations and a massive game library.",
                releasedate: "N/A"
            },
            {
                platform_id: 7,
                platform_name: "Nintendo Switch",
                platform_description: "A hybrid console that can be used as a home console and a portable device, known for popular franchises like Zelda and Mario.",
                releasedate: "2017-03-03"
            },
            {
                platform_id: 8,
                platform_name: "PlayStation 5",
                platform_description: "Sony's latest console with advanced graphics, fast load times, and a new controller with haptic feedback.",
                releasedate: "2020-11-12"
            },
            {
                platform_id: 9,
                platform_name: "Xbox Series X/S",
                platform_description: "Microsoft's next-gen consoles offering high performance, quick loading, and compatibility with previous Xbox games.",
                releasedate: "2020-11-10"
            },
            {
                platform_id: 10,
                platform_name: "Mobile",
                platform_description: "Gaming on smartphones and tablets, offering a diverse range of casual and competitive games.",
                releasedate: "N/A"
            }
        ];
    }

    async fetchStates() {
        return [
            {state_name: "New", state_description: "A brand new unused, unopened, and undamaged game in perfect condition. The original packaging and all materials are in brand new condition."},
            {state_name: "Like New", state_description: "Game just removed from shrink wrap. No wear and tear, all facets of the game are intact."},
            {state_name: "Very Good", state_description: "Very minimal wear and tear. All game materials are present. You would give this item to a friend as a gift."},
            {state_name: "Good", state_description: "Minor damage to the box and/or its contents. All game materials are present. Game maybe played once or twice."},
            {state_name: "Acceptable", state_description: "Some damage to the box, but the game is still intact. Possible split corner{state_name: s} on the box. Maybe missing a non-crucial game piece. Possibly missing rules/instructions, but are available on the web. Scuffing on the game board."},
            {state_name: "Unacceptable", state_description: "Major damage to box and its parts. Possibly missing several important pieces. Broken or missing board/box. No rules/instructions, and they are not readily available. Do not sell this game on Board Game Geek."}
        ]
    }
}