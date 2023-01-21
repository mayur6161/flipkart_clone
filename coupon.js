function loadCoupon() {
  document.getElementsByClassName("coupon")[0].getElementsByClassName.display =
    "block";
  document.getElementsById("search").style.opacity = "0.5";
}

const closeCoupon = () => {
  document.getElementsByClassName("coupon")[0].style.display = "none";
  document.getElementsById("search").style.opacity = "1";
};
