//Viết chương trình người dùng nhập vào ô input 1 số nguyên. Khi click button trả ra giá trị từ 2 tới ô giá trị input

// Hàm viết phương trình tính ước để xét hợp điều kiện và trả ra kết quả
function isPrime(n) {
  let a = Math.sqrt(n);
  for (let i = 2; i <= a; i++) {
    if (n % i === 0) {
      return 0;
    }
  }
  return 1;
}

//Hàm vòng lặp
function baiTapThem() {
  //input
  let prime = +document.getElementById("prime").value;
  //process
  let primes = [];

  if (prime < 2) {
    alert("Số nguyên tố phải lớn hơn 1. Vui lòng nhập lại!");
    return;
  }

  for (let i = 2; i <= prime; i++) {
    if (isPrime(i) === 1) {
      primes.push(i);
    }
  }
  //output
  console.log(primes);
  let divResult = document.getElementById("total");
  divResult.style.display = "block";
  divResult.innerHTML = primes.join(" ");
}
