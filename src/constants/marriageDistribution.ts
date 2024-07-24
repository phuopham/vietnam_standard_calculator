//Distribution of population aged 15 and over in Vietnam in 2021, by marital status
//https://www.statista.com/statistics/1358213/vietnam-share-of-people-aged-15-and-over-by-marital-status/

const MARITAL_STATUS_RAW = {
    "CurrentlyMarried": "67.2%",
    "Single": "23.8%",
    "Widowed": "6.5%",
    "Divorced": "2.2%",
    "Separated": "0.3%"
}

export const MARITAL_STATUS = {
    "CurrentlyMarried": 67.2,
    "Single": 23.8,
    "Widowed": 6.5,
    "Divorced": 2.2,
    "Separated": 0.3
} as const