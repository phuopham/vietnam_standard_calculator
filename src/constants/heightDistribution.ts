//2020, the average Vietnamese man is 168.1cm tall and the average Vietnamese woman is 156.2cm tall
// JSON was created with normal distribution (ChatGPT)
const HEIGHT_DISTRIBUTION_RAW = {
  "gender": {
    "male": {
      "1.50-1.54m": 1.0,
      "1.55-1.59m": 5.0,
      "1.60-1.64m": 20.0,
      "1.65-1.69m": 34.0,
      "1.70-1.74m": 30.0,
      "1.75-1.79m": 8.0,
      "1.80-1.84m": 2.0,
      "1.85-1.89m": 0.5
    },
    // ????
    "female": {
      "1.50-1.54m": 1.0,
      "1.55-1.59m": 5.0,
      "1.60-1.64m": 20.0,
      "1.65-1.69m": 34.0,
      "1.70-1.74m": 30.0,
      "1.75-1.79m": 8.0,
      "1.80-1.84m": 2.0,
      "1.85-1.89m": 0.5
    }
  }
}
//base on normal distribution and my assumption
//TODO: find trusted source
export const HEIGHT_DISTRIBUTION = [
  { height: 140, male: 0.2, female: 5 },
  { height: 150, male: 0.3, female: 8 },
  { height: 155, male: 0.7, female: 21 },
  { height: 160, male: 5, female: 32 },
  { height: 165, male: 19, female: 20 },
  { height: 170, male: 34, female: 7 },
  { height: 175, male: 29, female: 2 },
  { height: 180, male: 8, female: 0.5 },
  { height: 185, male: 2, female: 0.1 },
  { height: 190, male: 0.3, female: 0.1 },
  { height: 195, male: 0.1, female: 0.01 },
  { height: 200, male: 0.1, female: 0.01 }
] as const