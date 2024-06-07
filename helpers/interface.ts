export interface ICurrency {
    id: number,
    name: string,
    Symbol: string
}
export function myHeading(){
    return 'my test heading ';
}
export function thisFunction(): number{
    return 55;
}
export interface thispage{
    myname: string,
}
export interface myframework{
    srNo:number, // ab m isay shaq daal k dikhanta undefined ka
    name:string, // question mark lgany sy optional ho jaati k wo undefiend ho sakti hy
    fee:number,
    test?:{
        optional?: string// ya option propety m ny test k agy defined us k andar test k andar phr access krty wqt bhi question mark lgaya 
        // kyn k m ny kaha tha ya optional ho sakti hy
    }
   // extended
    // yahan jo data types di hn wohe wahan do whana r di hoi r data type m n small hta number r convert krty wqt data type ko cpital m hta like 
    // Number(stringdata)
    
}
export interface useState{

}


