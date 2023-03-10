const n1 = 6;
const n2 = 4;
let allowed: boolean = false;
let phrase: string = "Unknown Data Type";

function add2nums(n1: number, n2: number, allowed: boolean, phrase: string){
    if(allowed){
    console.log(n1 + n2);
    }else{
        console.log(phrase);
    }
}


add2nums(n1, n2, allowed, phrase);