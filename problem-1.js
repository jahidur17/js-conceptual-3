function cashOut(money) {
    if (money < 0 || typeof money !== "number") {
      return "Invalid";
    }
    // if(typeof money !=="number"){
    //     return "Invalid"
    // }
    let charge = money* (1.75 / 100);
    let fixedCharge = charge.toFixed(4)
    // return fixedCharge; // akahne return korbe string,,, number return kobe na //
    // r oi string ke number niye jawar jonne * parseFloat bebohar kora hoi //
    let finalCharge = parseFloat(fixedCharge);
    return finalCharge;
}
console.log(cashOut(999));
