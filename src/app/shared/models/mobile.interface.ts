export interface Imobile{
  id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
    isAvailable: boolean;
    rating: number;

    onlyleft?: number;
    discount?:number;
    delivery?:string;

    specifications ?: Array<string>;
}
