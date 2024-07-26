// Age distribution 2020
//https://www.indexmundi.com/vietnam/age_structure.html

// const AGE_DISTRIBUTION_RAW= [
//         {"age_range": "0-4", "male": 4.5, "female": 4.3},
//         {"age_range": "5-9", "male": 4.3, "female": 4.1},
//         {"age_range": "10-14", "male": 4.1, "female": 3.9},
//         {"age_range": "15-19", "male": 3.9, "female": 3.7},
//         {"age_range": "20-24", "male": 3.7, "female": 3.5},
//         {"age_range": "25-29", "male": 3.5, "female": 3.3},
//         {"age_range": "30-34", "male": 3.3, "female": 3.1},
//         {"age_range": "35-39", "male": 3.1, "female": 2.9},
//         {"age_range": "40-44", "male": 2.9, "female": 2.7},
//         {"age_range": "45-49", "male": 2.7, "female": 2.5},
//         {"age_range": "50-54", "male": 2.5, "female": 2.3},
//         {"age_range": "55-59", "male": 2.3, "female": 2.1},
//         {"age_range": "60-64", "male": 2.1, "female": 1.9},
//         {"age_range": "65-69", "male": 1.9, "female": 1.7},
//         {"age_range": "70-74", "male": 1.7, "female": 1.5},
//         {"age_range": "75-79", "male": 1.5, "female": 1.3},
//         {"age_range": "80-84", "male": 1.3, "female": 1.1},
//         {"age_range": "85-89", "male": 1.1, "female": 0.9},
//         {"age_range": "90-94", "male": 0.9, "female": 0.7},
//         {"age_range": "95-99", "male": 0.7, "female": 0.5},
//         {"age_range": "100+", "male": 0.5, "female": 0.3}
//       ]

export const AGE_DISTRIBUTION = [
  { "age_range": "0-4", under: 5, "male": 4.5, "female": 4.3 },
  { "age_range": "5-9", under: 10, "male": 4.3, "female": 4.1 },
  { "age_range": "10-14", under: 15, "male": 4.1, "female": 3.9 },
  { "age_range": "15-19", under: 20, "male": 3.9, "female": 3.7 },
  { "age_range": "20-24", under: 25, "male": 3.7, "female": 3.5 },
  { "age_range": "25-29", under: 30, "male": 3.5, "female": 3.3 },
  { "age_range": "30-34", under: 35, "male": 3.3, "female": 3.1 },
  { "age_range": "35-39", under: 40, "male": 3.1, "female": 2.9 },
  { "age_range": "40-44", under: 45, "male": 2.9, "female": 2.7 },
  { "age_range": "45-49", under: 50, "male": 2.7, "female": 2.5 },
  { "age_range": "50-54", under: 55, "male": 2.5, "female": 2.3 },
  { "age_range": "55-59", under: 60, "male": 2.3, "female": 2.1 },
  { "age_range": "60-64", under: 65, "male": 2.1, "female": 1.9 },
  { "age_range": "65-69", under: 70, "male": 1.9, "female": 1.7 },
  { "age_range": "70-74", under: 75, "male": 1.7, "female": 1.5 },
  { "age_range": "75-79", under: 80, "male": 1.5, "female": 1.3 },
  { "age_range": "80-84", under: 85, "male": 1.3, "female": 1.1 },
  { "age_range": "85-89", under: 90, "male": 1.1, "female": 0.9 },
  { "age_range": "90-94", under: 95, "male": 0.9, "female": 0.7 },
  { "age_range": "95-99", under: 100, "male": 0.7, "female": 0.5 },
  { "age_range": "100+", under: 120, "male": 0.5, "female": 0.3 }
] as const