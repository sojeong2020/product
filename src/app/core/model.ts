export  interface Result {
    result: string,
    data: Production[]
}


export interface Production {

   id:string,
   SKU: string,
   name: string,
   brandName: string,
   mainImage: string,
   price: Price,
   sizes: [],
   stockStatus: string,
   colour: string,
   description: string

}

interface Price {
    amount: number,
    currency:string
}