export interface ILaptops{
    image:string,
    name:string,
    description:IDescriptions[],
    price:number,
    stock:number,
    offer:boolean,
    id:number,
    quantity:number,

}
export interface IDescriptions{
    processor:string,
    ram:string,
    storage:string,
    screen:string,
}
export interface IFact{
    name:string,
    stock:number,
}
    

    