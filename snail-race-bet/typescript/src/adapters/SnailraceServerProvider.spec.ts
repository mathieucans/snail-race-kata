interface SnailRaceProvider {
    races() : Promise<Array<SnailRaceResult>>
}

describe('Snail race result', () => {

    test('return', async () => {
        const response = await fetch('http://localhost:8000/results')

        expect(response.status).toEqual(200)
        expect(await response.json()).toEqual({
            "races": [
                {
                    "podium": [
                        {
                            "name": "Northern Dancer",
                            "number": 9
                        },
                        {
                            "name": "American Pharoah",
                            "number": 4
                        },
                        {
                            "name": "Black Caviar",
                            "number": 6
                        }
                    ],
                    "raceId": 900465,
                    "timestamp": 1714747357227
                },
                {
                    "podium": [
                        {
                            "name": "Seabiscuit",
                            "number": 3
                        },
                        {
                            "name": "Ruffian",
                            "number": 11
                        },
                        {
                            "name": "Kincsem",
                            "number": 17
                        }
                    ],
                    "raceId": 168634,
                    "timestamp": 1714747057111
                },
                {
                    "podium": [
                        {
                            "name": "Seattle Slew",
                            "number": 13
                        },
                        {
                            "name": "Cigar",
                            "number": 15
                        },
                        {
                            "name": "Affirmed",
                            "number": 14
                        }
                    ],
                    "raceId": 785696,
                    "timestamp": 1714746756976
                },
                {
                    "podium": [
                        {
                            "name": "American Pharoah",
                            "number": 4
                        },
                        {
                            "name": "Frankel",
                            "number": 7
                        },
                        {
                            "name": "Northern Dancer",
                            "number": 9
                        }
                    ],
                    "raceId": 734876,
                    "timestamp": 1714746456812
                },
                {
                    "podium": [
                        {
                            "name": "Seattle Slew",
                            "number": 13
                        },
                        {
                            "name": "Justify",
                            "number": 20
                        },
                        {
                            "name": "Gordon",
                            "number": 1
                        }
                    ],
                    "raceId": 864195,
                    "timestamp": 1714746156717
                },
                {
                    "podium": [
                        {
                            "name": "Ruffian",
                            "number": 11
                        },
                        {
                            "name": "Justify",
                            "number": 20
                        },
                        {
                            "name": "Red Rum",
                            "number": 10
                        }
                    ],
                    "raceId": 305316,
                    "timestamp": 1714745856571
                },
                {
                    "podium": [
                        {
                            "name": "Seabiscuit",
                            "number": 3
                        },
                        {
                            "name": "Cigar",
                            "number": 15
                        },
                        {
                            "name": "Black Caviar",
                            "number": 6
                        }
                    ],
                    "raceId": 974243,
                    "timestamp": 1714745556515
                },
                {
                    "podium": [
                        {
                            "name": "Cigar",
                            "number": 15
                        },
                        {
                            "name": "American Pharoah",
                            "number": 4
                        },
                        {
                            "name": "Gordon",
                            "number": 1
                        }
                    ],
                    "raceId": 328486,
                    "timestamp": 1714745256391
                },
                {
                    "podium": [
                        {
                            "name": "Ruffian",
                            "number": 11
                        },
                        {
                            "name": "Northern Dancer",
                            "number": 9
                        },
                        {
                            "name": "Red Rum",
                            "number": 10
                        }
                    ],
                    "raceId": 48805,
                    "timestamp": 1714744956270
                },
                {
                    "podium": [
                        {
                            "name": "Justify",
                            "number": 20
                        },
                        {
                            "name": "Black Caviar",
                            "number": 6
                        },
                        {
                            "name": "Phar Lap",
                            "number": 8
                        }
                    ],
                    "raceId": 450006,
                    "timestamp": 1714744656156
                },
                {
                    "podium": [
                        {
                            "name": "Northern Dancer",
                            "number": 9
                        },
                        {
                            "name": "Winx",
                            "number": 19
                        },
                        {
                            "name": "Makybe Diva",
                            "number": 18
                        }
                    ],
                    "raceId": 775527,
                    "timestamp": 1714744356056
                },
                {
                    "podium": [
                        {
                            "name": "Justify",
                            "number": 20
                        },
                        {
                            "name": "Desert Orchid",
                            "number": 16
                        },
                        {
                            "name": "Seabiscuit",
                            "number": 3
                        }
                    ],
                    "raceId": 899398,
                    "timestamp": 1714744055985
                },
                {
                    "podium": [
                        {
                            "name": "Affirmed",
                            "number": 14
                        },
                        {
                            "name": "Cigar",
                            "number": 15
                        },
                        {
                            "name": "Citation",
                            "number": 12
                        }
                    ],
                    "raceId": 928573,
                    "timestamp": 1714743755888
                },
                {
                    "podium": [
                        {
                            "name": "Red Rum",
                            "number": 10
                        },
                        {
                            "name": "Zenyatta",
                            "number": 5
                        },
                        {
                            "name": "Northern Dancer",
                            "number": 9
                        }
                    ],
                    "raceId": 445969,
                    "timestamp": 1714743455715
                },
                {
                    "podium": [
                        {
                            "name": "Kincsem",
                            "number": 17
                        },
                        {
                            "name": "Winx",
                            "number": 19
                        },
                        {
                            "name": "Black Caviar",
                            "number": 6
                        }
                    ],
                    "raceId": 113934,
                    "timestamp": 1714743155602
                },
                {
                    "podium": [
                        {
                            "name": "Seabiscuit",
                            "number": 3
                        },
                        {
                            "name": "Man O'War",
                            "number": 2
                        },
                        {
                            "name": "Phar Lap",
                            "number": 8
                        }
                    ],
                    "raceId": 484331,
                    "timestamp": 1714742855452
                },
                {
                    "podium": [
                        {
                            "name": "Cigar",
                            "number": 15
                        },
                        {
                            "name": "Ruffian",
                            "number": 11
                        },
                        {
                            "name": "American Pharoah",
                            "number": 4
                        }
                    ],
                    "raceId": 54137,
                    "timestamp": 1714742555332
                },
                {
                    "podium": [
                        {
                            "name": "Man O'War",
                            "number": 2
                        },
                        {
                            "name": "Desert Orchid",
                            "number": 16
                        },
                        {
                            "name": "Black Caviar",
                            "number": 6
                        }
                    ],
                    "raceId": 337340,
                    "timestamp": 1714742255180
                },
                {
                    "podium": [
                        {
                            "name": "Frankel",
                            "number": 7
                        },
                        {
                            "name": "Kincsem",
                            "number": 17
                        },
                        {
                            "name": "Gordon",
                            "number": 1
                        }
                    ],
                    "raceId": 691397,
                    "timestamp": 1714741955059
                },
                {
                    "podium": [
                        {
                            "name": "Citation",
                            "number": 12
                        },
                        {
                            "name": "Zenyatta",
                            "number": 5
                        },
                        {
                            "name": "Gordon",
                            "number": 1
                        }
                    ],
                    "raceId": 455509,
                    "timestamp": 1714741654982
                },
                {
                    "podium": [
                        {
                            "name": "Phar Lap",
                            "number": 8
                        },
                        {
                            "name": "Cigar",
                            "number": 15
                        },
                        {
                            "name": "Northern Dancer",
                            "number": 9
                        }
                    ],
                    "raceId": 224168,
                    "timestamp": 1714741354989
                },
                {
                    "podium": [
                        {
                            "name": "Cigar",
                            "number": 15
                        },
                        {
                            "name": "Black Caviar",
                            "number": 6
                        },
                        {
                            "name": "Gordon",
                            "number": 1
                        }
                    ],
                    "raceId": 537535,
                    "timestamp": 1714741054989
                },
                {
                    "podium": [
                        {
                            "name": "Phar Lap",
                            "number": 8
                        },
                        {
                            "name": "Desert Orchid",
                            "number": 16
                        },
                        {
                            "name": "American Pharoah",
                            "number": 4
                        }
                    ],
                    "raceId": 422378,
                    "timestamp": 1714740754989
                },
                {
                    "podium": [
                        {
                            "name": "Phar Lap",
                            "number": 8
                        },
                        {
                            "name": "Red Rum",
                            "number": 10
                        },
                        {
                            "name": "American Pharoah",
                            "number": 4
                        }
                    ],
                    "raceId": 707506,
                    "timestamp": 1714740454989
                }
            ]
        })
    })
})