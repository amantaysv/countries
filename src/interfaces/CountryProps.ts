export interface CountryProps {
  flags: {
    png: string
    svg: string
    alt: string
  }
  name: {
    common: string
    official: string
    nativeName: {
      kir: {
        official: string
        common: string
      }
      rus: {
        official: string
        common: string
      }
    }
  }
  capital: string[]
  region: string
  population: number
}
