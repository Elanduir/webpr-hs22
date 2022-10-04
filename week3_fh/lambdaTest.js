const id = x => x;
const konst = x => y => x;
const snd =  konst(id);

document.writeln(snd(43)(23));

const and = x => y => x(y)(x);





const Left   = x => f => g => f (x);
const Right  = x => f => g => g (x);
const either = e => f => g => e (f) (g);
//const id = x => x;


const x_ = Math.random();
const safeDiv = num => divisor =>
    divisor === 0
        ? Left  ("Cannot divide by 0")
        : Right (num / divisor);



const eShow = sdiv => either( sdiv )(x)(x);

console.log(eShow( safeDiv(1)(0))  === "Cannot divide by 0" && eShow( safeDiv(x_)(1)) === "Result is: "+x_)