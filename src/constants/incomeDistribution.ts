// Percentage distribution of household income in Vietnam in 2020
// https://www.statista.com/statistics/1227952/vietnam-household-income-distribution/

// const INCOME_DISTRIBUTION_RAW = [
//   { "range": "40,000,000 VND and over", "percentage": 7 },
//   { "range": "30,000,000 - 39,999,999 VND", "percentage": 8 },
//   { "range": "25,000,000 - 29,999,999 VND", "percentage": 13 },
//   { "range": "20,000,000 - 24,999,999 VND", "percentage": 17 },
//   { "range": "15,000,000 - 19,999,999 VND", "percentage": 21 },
//   { "range": "10,000,000 - 14,999,999 VND", "percentage": 17 },
//   { "range": "5,000,000 - 9,999,999 VND", "percentage": 14 },
//   { "range": "Under 4,990,000", "percentage": 3 }
// ]

// low and high in million
// household income however

// export const HOUSEHOLD_INCOME = [
//   { range: "40,000,000 VND and over", low: 40, high: 200, percentage: 6 },
//   { range: "30,000,000 - 39,999,999 VND", low: 30, high: 39, percentage: 8 },
//   { range: "25,000,000 - 29,999,999 VND", low: 25, high: 29, percentage: 13 },
//   { range: "20,000,000 - 24,999,999 VND", low: 20, high: 24, percentage: 17 },
//   { range: "15,000,000 - 19,999,999 VND", low: 15, high: 19, percentage: 21 },
//   { range: "10,000,000 - 14,999,999 VND", low: 10, high: 14, percentage: 17 },
//   { range: "5,000,000 - 9,999,999 VND", low: 50, high: 9, percentage: 14 },
//   { range: "Under 4,990,000", low: 0, high: 4, percentage: 3 }
// ]

// Percentage distribution of personal income in rural and urban areas in Vietnam in 2020, by income range
// https://www.statista.com/statistics/1227955/vietnam-personal-income-distribution-in-urban-and-rural-areas-by-income-range/
// 40.4 % of the population is urban (39,908,501 people in 2023)
// https://www.worldometers.info/world-population/vietnam-population/

export const URBAN_PERCENTAGE = 0.404

// Urban only:   

// export const INCOME_DISTRIBUTION_RAW2 = [
//   { income: 50, urban: 7, rural: 2 },
//   { income: 30, urban: 13, rural: 6 },
//   { income: 20, urban: 21, rural: 8 },
//   { income: 15, urban: 22, rural: 15 },
//   { income: 5, urban: 36, rural: 69 }
// ] as const

export const INCOME_DISTRIBUTION = [
  { income: 50, urban: .7, rural: .5 },
  { income: 45, urban: 1, rural: 0.5 },
  { income: 40, urban: 2, rural: 0.5 },
  { income: 35, urban: 2, rural: 0.5 },
  { income: 30, urban: 6, rural: 3 },
  { income: 35, urban: 7, rural: 3 },
  { income: 20, urban: 21, rural: 7 },
  { income: 15, urban: 10, rural: 8 },
  { income: 10, urban: 12, rural: 8 },
  { income: 5, urban: 34, rural: 67 }
] as const

//
//