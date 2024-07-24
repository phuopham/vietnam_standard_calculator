// Percentage distribution of household income in Vietnam in 2020
// https://www.statista.com/statistics/1227952/vietnam-household-income-distribution/
const INCOME_DISTRIBUTION_RAW = [
      {"range": "40,000,000 VND and over", "percentage": 7},
      {"range": "30,000,000 - 39,999,999 VND", "percentage": 8},
      {"range": "25,000,000 - 29,999,999 VND", "percentage": 13},
      {"range": "20,000,000 - 24,999,999 VND", "percentage": 17},
      {"range": "15,000,000 - 19,999,999 VND", "percentage": 21},
      {"range": "10,000,000 - 14,999,999 VND", "percentage": 17},
      {"range": "5,000,000 - 9,999,999 VND", "percentage": 14},
      {"range": "Under 4,990,000", "percentage": 3}
    ]

// low and high in million    

export const INCOME_DISTRIBUTION = [
  {range: "40,000,000 VND and over", low:40, percentage: 7},
  {range: "30,000,000 - 39,999,999 VND",low:30, high:39, percentage: 8},
  {range: "25,000,000 - 29,999,999 VND",low:25, high:29, percentage: 13},
  {range: "20,000,000 - 24,999,999 VND",low:20, high:24, percentage: 17},
  {range: "15,000,000 - 19,999,999 VND",low:15, high:19, percentage: 21},
  {range: "10,000,000 - 14,999,999 VND",low:10, high:14, percentage: 17},
  {range: "5,000,000 - 9,999,999 VND",low:50, high:9, percentage: 14},
  {range: "Under 4,990,000",high:4, percentage: 3}

] as const
  