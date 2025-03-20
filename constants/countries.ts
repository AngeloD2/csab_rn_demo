import { Country } from '../plugins/firebase/interfaces/country';

export const Countries: Country[] = [
    {
        country_id: 'PH',
        country_name: 'Philippines',
        regions: [
            {
                region_id: 'Region I',
                region_name: 'Ilocos Region',
                provinces: [
                    {
                        province_id: 'Ilocos Norte',
                        province_name: 'Ilocos Norte',
                        cities: [
                            {
                                city_id: 'Batac',
                                city_name: 'Batac',
                            },
                            {
                                city_id: 'Laoag',
                                city_name: 'Laoag',
                            },
                        ]
                    },
                    {
                        province_id: 'Ilocos Sur',
                        province_name: 'Ilocos Sur',
                        cities: [
                            {
                                city_id: 'Candon',
                                city_name: 'Candon',
                            },
                            {
                                city_id: 'Vigan',
                                city_name: 'Vigan',
                            },
                        ]
                    },
                    {
                        province_id: 'La Union',
                        province_name: 'La Union',
                        cities: [{
                            city_id: 'San Fernando',
                            city_name: 'San Fernando',
                        }]
                    },
                    {
                        province_id: 'Pangasinan',
                        province_name: 'Pangasinan',
                        cities: [
                            {
                                city_id: 'Alaminos',
                                city_name: 'Alaminos',
                            },
                            {
                                city_id: 'San Carlos',
                                city_name: 'San Carlos',
                            },
                            {
                                city_id: 'Urdaneta',
                                city_name: 'Urdaneta',
                            },
                            {
                                city_id: 'Dagupan',
                                city_name: 'Dagupan',
                            },
                        ]
                    }
                ]
            },
            {
                region_id: 'Region VI',
                region_name: 'Western Visayas',
                provinces: [
                    {
                        province_id: 'NEG-OCC',
                        province_name: 'Negros Occidental',
                        cities: [
                            {
                                city_id: 'BCD',
                                city_name: 'Bacolod City',
                                barangays: [
                                    "ALANGILAN",
                                    "ALIJIS",
                                    "BANAGO",
                                    "BARANGAY 1 (POB.)",
                                    "BARANGAY 2 (POB.)",
                                    "BARANGAY 3 (POB.)",
                                    "BARANGAY 4 (POB.)",
                                    "BARANGAY 5 (POB.)",
                                    "BARANGAY 6 (POB.)",
                                    "BARANGAY 7 (POB.)",
                                    "BARANGAY 8 (POB.)",
                                    "BARANGAY 9 (POB.)",
                                    "BARANGAY 10 (POB.)",
                                    "BARANGAY 11 (POB.)",
                                    "BARANGAY 12 (POB.)",
                                    "BARANGAY 13 (POB.)",
                                    "BARANGAY 14 (POB.)",
                                    "BARANGAY 15 (POB.)",
                                    "BARANGAY 16 (POB.)",
                                    "BARANGAY 17 (POB.)",
                                    "BARANGAY 18 (POB.)",
                                    "BARANGAY 19 (POB.)",
                                    "BARANGAY 20 (POB.)",
                                    "BARANGAY 21 (POB.)",
                                    "BARANGAY 22 (POB.)",
                                    "BARANGAY 23 (POB.)",
                                    "BARANGAY 24 (POB.)",
                                    "BARANGAY 25 (POB.)",
                                    "BARANGAY 26 (POB.)",
                                    "BARANGAY 27 (POB.)",
                                    "BARANGAY 28 (POB.)",
                                    "BARANGAY 29 (POB.)",
                                    "BARANGAY 30 (POB.)",
                                    "BARANGAY 31 (POB.)",
                                    "BARANGAY 32 (POB.)",
                                    "BARANGAY 33 (POB.)",
                                    "BARANGAY 34 (POB.)",
                                    "BARANGAY 35 (POB.)",
                                    "BARANGAY 36 (POB.)",
                                    "BARANGAY 37 (POB.)",
                                    "BARANGAY 38 (POB.)",
                                    "BARANGAY 39 (POB.)",
                                    "BARANGAY 40 (POB.)",
                                    "BARANGAY 41 (POB.)",
                                    "BATA",
                                    "CABUG",
                                    "ESTEFANIA",
                                    "FELISA",
                                    "GRANADA",
                                    "HANDUMANAN",
                                    "MANDALAGAN",
                                    "MANSILINGAN",
                                    "MONTEVISTA",
                                    "PAHANOCOY",
                                    "PUNTA TAYTAY",
                                    "SINGCANG-AIRPORT",
                                    "SUM-AG",
                                    "TACULING",
                                    "TANGUB",
                                    "VILLAMONTE",
                                    "VISTA ALEGRE"
                                ]
                            },
                            {
                                city_id: 'Bago',
                                city_name: 'Bago',
                                barangays: [
                                    "ABUANAN",
                                    "ALIANZA",
                                    "ATIPULUAN",
                                    "BACONG-MONTILLA",
                                    "BAGROY",
                                    "BALINGASAG",
                                    "BINUBUHAN",
                                    "BUSAY",
                                    "CALUMANGAN",
                                    "CARIDAD",
                                    "DULAO",
                                    "ILIJAN",
                                    "JORGE L. ARANETA (MA-AO CENTRAL)",
                                    "LAG-ASAN",
                                    "MA-AO BARRIO",
                                    "MAILUM",
                                    "MALINGIN",
                                    "NAPOLES",
                                    "PACOL",
                                    "POBLACION",
                                    "SAGASA",
                                    "SAMPINIT",
                                    "TABUNAN",
                                    "TALOC"
                                ]
                            },
                            {
                                city_id: 'BINALBAGAN',
                                city_name: 'BINALBAGAN',
                                barangays: [
                                    "AMONTAY",
                                    "BAGROY",
                                    "BI-AO",
                                    "CANMOROS (POB.)",
                                    "ENCLARO",
                                    "MARINA (POB.)",
                                    "PAGLAUM (POB.)",
                                    "PAYAO",
                                    "PROGRESO (POB.)",
                                    "SAN JOSE",
                                    "SAN JUAN (POB.)",
                                    "SAN PEDRO (POB.)",
                                    "SAN TEODORO (POB.)",
                                    "SAN VICENTE (POB.)",
                                    "SANTO ROSARIO (POB.)",
                                    "SANTOL"
                                ]
                            },
                            {
                                city_id: 'Cadiz',
                                city_name: 'Cadiz',
                                barangays: [
                                    "ANDRES BONIFACIO",
                                    "BANQUEROHAN",
                                    "BARANGAY 1 POB. (ZONE 1)",
                                    "BARANGAY 2 POB. (ZONE 2)",
                                    "BARANGAY 3 POB. (ZONE 3)",
                                    "BARANGAY 4 POB. (ZONE 4)",
                                    "BARANGAY 5 POB. (ZONE 5)",
                                    "BARANGAY 6 POB. (ZONE 6)",
                                    "BURGOS",
                                    "CABAHUG",
                                    "CADIZ VIEJO",
                                    "CADUHA-AN",
                                    "CELESTINO VILLACIN",
                                    "DAGA",
                                    "JERUSALEM",
                                    "LUNA",
                                    "MABINI",
                                    "MAGSAYSAY",
                                    "SICABA",
                                    "TIGLAWIGAN",
                                    "TINAMPA-AN",
                                    "V. F. GUSTILO"
                                ]
                            },
                            {
                                city_id: 'Calatrava',
                                city_name: 'Calatrava',
                                barangays: [
                                    "AGPANGI",
                                    "ANI-E",
                                    "BAGACAY",
                                    "BANTAYANON",
                                    "BUENAVISTA",
                                    "CABUNGAHAN",
                                    "CALAMPISAWAN",
                                    "CAMBAYOBO",
                                    "CASTELLANO",
                                    "CRUZ",
                                    "DOLIS",
                                    "HILUB-ANG",
                                    "HINAB-ONGAN",
                                    "ILAYA",
                                    "LAGA-AN",
                                    "LALONG",
                                    "LEMERY",
                                    "LIPAT-ON",
                                    "LO-OK (POB.)",
                                    "MA-ASLOB",
                                    "MACASILAO",
                                    "MAHILUM",
                                    "MALANOG",
                                    "MALATAS",
                                    "MARCELO",
                                    "MENCHACA",
                                    "MINA-UTOK",
                                    "MINAPASUK",
                                    "PAGHUMAYAN",
                                    "PANTAO",
                                    "PATUN-AN",
                                    "PINOCUTAN",
                                    "REFUGIO",
                                    "SAN BENITO",
                                    "SAN ISIDRO",
                                    "SUBA (POB.)",
                                    "TELIM",
                                    "TIGBAO",
                                    "TIGBON",
                                    "WINASWASAN"
                                ]
                            },
                            {
                                city_id: 'Candoni',
                                city_name: 'Candoni',
                                barangays: [
                                    "AGBOY",
                                    "BANGA",
                                    "CABIA-AN",
                                    "CANINGAY",
                                    "GATUSLAO",
                                    "HABA",
                                    "PAYAUAN",
                                    "POBLACION EAST",
                                    "POBLACION WEST"
                                ]
                            },
                            {
                                city_id: 'Cauayan',
                                city_name: 'Cauayan',
                                barangays: [
                                    "ABACA",
                                    "BACLAO",
                                    "BASAK",
                                    "BULATA",
                                    "CALILING",
                                    "CAMALANDA-AN",
                                    "CAMINDANGAN",
                                    "ELIHAN",
                                    "GUILJUNGAN",
                                    "INAYAWAN",
                                    "ISIO",
                                    "LINAON",
                                    "LUMBIA",
                                    "MAMBUGSAY",
                                    "MAN-ULING",
                                    "MASALING",
                                    "MOLOBOLO",
                                    "POBLACION",
                                    "SURA",
                                    "TALACDAN",
                                    "TAMBAD",
                                    "TILING",
                                    "TOMINA",
                                    "TUYOM",
                                    "YAO-YAO"
                                ]
                            },
                            {
                                city_id: 'Escalante',
                                city_name: 'Escalante',
                            },
                            {
                                city_id: 'Himamalyan',
                                city_name: 'Himamalyan',
                            },
                            {
                                city_id: 'Kabankalan',
                                city_name: 'Kabankalan',
                            },
                            {
                                city_id: 'La Carlota',
                                city_name: 'La Carlota',
                            },
                            {
                                city_id: 'Sagay',
                                city_name: 'Sagay',
                            },
                            {
                                city_id: 'San Carlos',
                                city_name: 'San Carlos',
                            },
                            {
                                city_id: 'Silay',
                                city_name: 'Silay',
                            },
                            {
                                city_id: 'Talisay',
                                city_name: 'Talisay',
                            },
                            {
                                city_id: 'Victorias',
                                city_name: 'Victorias',
                            },
                        ]
                    },
                    {
                        province_id: 'Ilo-Ilo',
                        province_name: 'Ilo-Ilo',
                        cities: [
                            {
                                city_id: 'Passi',
                                city_name: 'Passi',
                            },
                        ]
                    },
                    {
                        province_id: 'Guimaras',
                        province_name: 'Guimaras',
                        cities: [
                            {
                                city_id: 'Jordan',
                                city_name: 'Jordan',
                            },
                        ]
                    },
                    {
                        province_id: 'Capiz',
                        province_name: 'Capiz',
                        cities: [
                            {
                                city_id: 'Roxas',
                                city_name: 'Roxas',
                            },
                        ]
                    },
                    {
                        province_id: 'Antique',
                        province_name: 'Antique',
                        cities: [
                            {
                                city_id: 'Anini-y',
                                city_name: 'Anini-y',
                            },
                            {
                                city_id: 'Barbaza',
                                city_name: 'Barbaza',
                            },
                            {
                                city_id: 'Belison',
                                city_name: 'Belison',
                            },
                        ]
                    },
                    {
                        province_id: 'Aklan',
                        province_name: 'Aklan',
                        cities: [
                            {
                                city_id: 'Kalibo',
                                city_name: 'Kalibo',
                            },
                            {
                                city_id: 'Altavas',
                                city_name: 'Altavas',
                            },
                            {
                                city_id: 'Balete',
                                city_name: 'Balete',
                            },
                        ]
                    },
                ]
            }
        ]
    },
    // {
    //     country_id: 'USA',
    //     country_name: 'United States',
    // },
    // {
    //     country_id: 'AU',
    //     country_name: 'Australia',
    // },
    // {
    //     country_id: 'NZ',
    //     country_name: 'New Zealand',
    // },
]