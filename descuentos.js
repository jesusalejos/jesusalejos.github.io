// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {

  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  
  const inputCupon = document.getElementById("InputCupon");
  const couponValue = inputCupon.value;

  const coupons = [
    {
    name: "cupon mariano",
    discount: 30,
    },
    {
    name: "cupon de las madres",
    discount: 20,
    },
    {
    name: "cupon buen pastor",
    discount: 10,
    },
  ];

const isCouponValueValid = function (coupon) { //atention with the coupon.name
    return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
  alert ("El cupón " + couponValue + " no es válido");
} else {
  let descuento = userCoupon.discount;
  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}

  
}


// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });

