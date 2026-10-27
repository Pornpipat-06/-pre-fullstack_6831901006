function calculateTotal(price, quatity) {
    return price * quatity;
}
console.log(`ราคารวม ${calculateTotal(25, 4)}`);

//arrow funciton 
const calculateTotalArrow = (price, quatity) => price * quatity;
console.log(`ราคารวม ${calculateTotalArrow(20, 3)}`);


const calculateWitVat = (price, quatity, vat = 0.07) => {
    const subtotal = price * quatity;
    return (subtotal + subtotal * vat).toFixed(2);
}
console.log(`รวมค่า vat ${calculateWitVat(100, 2)}`);