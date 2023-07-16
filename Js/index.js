window.onscroll = () => {
  navFunction();
};

navFunction = () => {
  if (document.documentElement.scrollTop > 90) {
    document.getElementById("nav-content").style.visibility = "visible";
    document.getElementById("nav-logo").style.visibility = "visible";
  } else {
    document.getElementById("nav-content").style.visibility = "hidden";
    document.getElementById("nav-logo").style.visibility = "hidden";
  }
};
//! ürünler js
// ? AŞAĞIDAKİ KOD BLOĞU KATEGORİYE BASTIĞIMIZ ZAMAN SEÇTİĞİMİZ DİVİ KATEGORİYLE İLGİLİ ÜRÜNLERLE DOLDURMAK İÇİN YAZILMIŞTI FARKLI BİR ŞEY UYGULADIM GEREK KALMADI 
// let secKoltukTakim = document.querySelector("#K-koltuk-takimlari");
// let secYemekOdasi = document.querySelector("#K-yemek-odalari");
// let secTvUnite = document.querySelector("#K-tv-uniteleri");
// let secMutfakMasalari = document.querySelector("#K-mutfak-masalari");
// let secYatakOdalari = document.querySelector("#K-yatak-odalari");
// let secUykuSeti = document.querySelector("#K-uyku-setleri");
// let secOrtaSehpa = document.querySelector("#K-orta-sehpa");
// let secSurguluDolap = document.querySelector("#K-surgulu-dolap");
// let secKapakliDolap = document.querySelector("#K-kapakli-dolap");

// let doldur = document.querySelector("#doldur");

// if (secKoltukTakim) {
//   secKoltukTakim.addEventListener("click", koltuk);
// }
// if (secYemekOdasi) {
//   secYemekOdasi.addEventListener("click", yemekOdasi);
// }
// if (secTvUnite) {
//   secTvUnite.addEventListener("click", tvUnite);
// }
// if (secMutfakMasalari) {
//   secMutfakMasalari.addEventListener("click", mutfakMasa);
// }
// if (secYatakOdalari) {
//   secYatakOdalari.addEventListener("click", yatakOda);
// }
// if (secUykuSeti) {
//   secUykuSeti.addEventListener("click", uykuSeti);
// }
// if (secOrtaSehpa) {
//   secOrtaSehpa.addEventListener("click", ortaSehpa);
// }
// if (secSurguluDolap) {
//   secSurguluDolap.addEventListener("click", surguluDolap);
// }
// if (secKapakliDolap) {
//   secKapakliDolap.addEventListener("click", kapakliDolap);
// }

// function koltuk() {
//   doldur.innerHTML = `  <h5 class="fs-4 bg-warning rounded-3 text-center fw-bold text-white">Koltuk Takımları</h5>
//   <div class="col-xl-4 col-md-6 trs ürünler-h ">
//     <div class="koltuk-card mb-5">
//         <img src="img/koltuk-takimlari/Screenshot_1.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-16" >DUNE KOLTUK TAKIMI</h6>
//         <p  id="u-price-16" >21999 TL </p><sub><del>23,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-16" id="product-count-1"  value="1"><br>
//         <a name="16" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div>
//  <div class="col-xl-4 col-md-6 trs ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/koltuk-takimlari/Screenshot_2.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-17" >LORD KOLTUK TAKIMI</h6>
//         <p id="u-price-17" >20000 TL </p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-17" id="product-count-1"  value="1"><br>
//         <a name="17" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div>
//  <div class="col-xl-4 col-md-6 trs ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/koltuk-takimlari/Screenshot_3.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-18" >LADY KOLTUK TAKIMI</h6>
//         <p id="u-price-18" >28999 TL </p><sub><del>29,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-18" id="product-count-1"  value="1"><br>
//         <a name="18" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div>
//  <div class="col-xl-4 col-md-6 trs ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/koltuk-takimlari/Screenshot_4.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-19" >ATLANTA KOLTUK TAKIMI</h6>
//         <p id="u-price-19" >29000 TL</p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-19" id="product-count-1"  value="1"><br>
//         <a name="19" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div>
//  <div class="col-xl-4 col-md-6 trs ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/koltuk-takimlari/Screenshot_5.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-20" >SİMPLE KOLTUK TAKIMI</h6>
//         <p id="u-price-20" >20000 TL </p><sub><del>22,999</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-20" id="product-count-1"  value="1"><br>
//         <a name="20" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div>
//  <div class="col-xl-4 col-md-6 trs ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/koltuk-takimlari/Screenshot_6.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-21" >BUFFALO KOLTUK TAKIMI</h6>
//         <p id="u-price-21" >24999 TL </p><sub><del>27,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-21" id="product-count-1"  value="1"><br>
//         <a name="21" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div>
//  <div class="col-xl-4 col-md-6 trs ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/koltuk-takimlari/Screenshot_7.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-22" >PALERMO KOLTUK TAKIMI</h6>
//         <p id="u-price-22" >35000 TL</p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-22" id="product-count-1"  value="1"><br>
//         <a name="22" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div>
//  <div class="col-xl-4 col-md-6 trs ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/koltuk-takimlari/Screenshot_8.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-23" >RİMİNİ KOLTUK TAKIMI</h6>
//         <p id="u-price-23" >24999 TL </p><sub><del>28,000</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-23" id="product-count-1"  value="1"><br>
//         <a name="23" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div>
//  <div class="col-xl-4 col-md-6 trs ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/koltuk-takimlari/Screenshot_10.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-24" >ZENİT KOLTUK TAKIMI</h6>
//         <p id="u-price-24" > 32000 TL </p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-24" id="product-count-1"  value="1"><br>
//         <a name="24" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div> `;
// }
// function yemekOdasi() {
//   doldur.innerHTML = ` <h5 class="fs-4 bg-warning rounded-3 text-center fw-bold text-white">Yemek Odaları</h5>
//   <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/yemek-odalari/como.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-34" >COMO YEMEK ODASI</h6>
//         <p id="u-price-34" >24000 TL <sub><del></del></sub></p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-34" id="product-count-1"  value="1"><br>
//         <a name="34" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/yemek-odalari/hermes.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-35" >HERMES YEMEK ODASI</h6>
//         <p id="u-price-35" >22000 TL </p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-35" id="product-count-1"  value="1"><br>
//         <a name="35" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/yemek-odalari/lima.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-36" >LİMA YEMEK ODASI</h6>
//         <p id="u-price-36" >28999 TL</p> <sub><del>29,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-36" id="product-count-1"  value="1"><br>
//         <a name="36" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/yemek-odalari/luis.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-37" >LUİS YEMEK ODASI</h6>
//         <p id="u-price-37" >29000 TL</p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-37" id="product-count-1"  value="1"><br>
//         <a name="37" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/yemek-odalari/monaco.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-38" >MONACO YEMEK ODASI</h6>
//         <p id="u-price-38" >26000 TL </p><sub><del>28,999</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-38" id="product-count-1"  value="1"><br>
//         <a name="38" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/yemek-odalari/petra.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-39" >LİNDA YEMEK ODASI</h6>
//         <p id="u-price-39" >24999 TL </p><sub><del>27,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-39" id="product-count-1"  value="1"><br>
//         <a name="39" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/yemek-odalari/pietro.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-40" >PİETRO YEMEK ODASI</h6>
//         <p id="u-price-40" >23000 TL </p><sub><del>25,000</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-40" id="product-count-1"  value="1"><br>
//         <a name="40" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/yemek-odalari/retro.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-41" >RETRO YEMEK ODASI</h6>
//         <p id="u-price-41" >20999 TL </p><sub><del>23,000</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-41" id="product-count-1"  value="1"><br>
//         <a name="41" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/yemek-odalari/venezia.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-42" >VENEZİA YEMEK ODASI</h6>
//         <p id="u-price-42" > 24200 TL </p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-42" id="product-count-1"  value="1"><br>
//         <a name="42" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>`;
// }
// function tvUnite() {
//   doldur.innerHTML = ` <h5 class="fs-4 bg-warning rounded-3 text-center fw-bold text-white">Tv Üniteleri</h5>
//   <div class="col-xl-4 col-md-6 trs ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/Tv-üniteleri/como.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-25" >COMO TV ÜNİTESİ</h6>
//         <p id="u-price-25" >12000 TL </p><sub><del>13,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-25" id="product-count-1"  value="1"><br>
//         <a name="25" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div>
//  <div class="col-xl-4 col-md-6 trs ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/Tv-üniteleri/hermes.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-26" >HERMES TV ÜNİTESİ</h6>
//         <p id="u-price-26" >12999 TL</p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-26" id="product-count-1"  value="1"><br>
//         <a name="26" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div>
//  <div class="col-xl-4 col-md-6 trs ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/Tv-üniteleri/lima.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-27" >LİMA TV ÜNİTESİ</h6>
//         <p id="u-price-27" >14500 TL </p><sub><del>15,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-27" id="product-count-1"  value="1"><br>
//         <a name="27" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div>
//  <div class="col-xl-4 col-md-6 trs ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/Tv-üniteleri/linda.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-28" >LİNDA TV ÜNİTESİ</h6>
//         <p id="u-price-28" >9000 TL</p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-28" id="product-count-1"  value="1"><br>
//         <a name="28" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div>
//  <div class="col-xl-4 col-md-6 trs ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/Tv-üniteleri/luis.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-29" >LUİS TV ÜNİTESİ</h6>
//         <p id="u-price-29" >9500 TL </p><sub><del>10,999</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-29" id="product-count-1"  value="1"><br>
//         <a name="29" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div>
//  <div class="col-xl-4 col-md-6 trs ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/Tv-üniteleri/monaco.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-30" >MONACO TV ÜNİTESİ</h6>
//         <p id="u-price-30" >11800 TL </p><sub><del>12,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-30" id="product-count-1"  value="1"><br>
//         <a name="30" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div>
//  <div class="col-xl-4 col-md-6 trs ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/Tv-üniteleri/petra.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-31" >PETRA TV ÜNİTESİ</h6>
//         <p id="u-price-31" >10000 TL</p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-31" id="product-count-1"  value="1"><br>
//         <a name="31" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div>
//  <div class="col-xl-4 col-md-6 trs ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/Tv-üniteleri/retro.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-32" >RETRO TV ÜNİTESİ</h6>
//         <p id="u-price-32" >14999 TL </p><sub><del>16,000</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-32" id="product-count-1"  value="1"><br>
//         <a name="32" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div>
//  <div class="col-xl-4 col-md-6 trs ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/Tv-üniteleri/venezia.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-33" >VENEZİA TV ÜNİTESİ</h6>
//         <P id="u-price-33" >10500 TL </p>
//           <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-33" id="product-count-1"  value="1"><br>
//         <a name="33" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div>`;
// }
// function mutfakMasa() {
//   doldur.innerHTML = ` <h5 class="fs-4 bg-warning rounded-3 text-center fw-bold text-white">Mutfak Masaları</h5>
//   <div class="col-xl-4 col-md-6 trs ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/Mutfak-masalari/apex.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-43" >APEX MUTFAK MASASI</h6>
//         <p id="u-price-43" >8999 TL</p> <sub><del>10,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-43" id="product-count-1"  value="1"><br>
//         <a name="43" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div>
//  <div class="col-xl-4 col-md-6 trs ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/Mutfak-masalari/olivia.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-44" >OLİVİA MUTFAK MASASI</h6>
//         <p id="u-price-44" >7500 TL </p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-44" id="product-count-1"  value="1"><br>
//         <a name="44" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div>
//  <div class="col-xl-4 col-md-6 trs ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/Mutfak-masalari/vision.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-45" >VİSİON MUTFAK MASASI</h6>
//         <p id="u-price-45" >11500 TL</p><sub><del>12,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-45" id="product-count-1"  value="1"><br>
//         <a name="45" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
//  </div>`;
// }
// function yatakOda() {
//   doldur.innerHTML = ` <h5 class="fs-4 bg-warning rounded-3 text-center fw-bold text-white">Yatak Odaları</h5>
//   <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/yatak-odalari/Screenshot_1.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-46" >TOSCANA YATAK ODASI</h6>
//         <p id="u-price-46" >38000 TL </p><sub><del>42,000</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-46" id="product-count-1"  value="1"><br>
//         <a name="46" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/yatak-odalari/Screenshot_2.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-47" >İBİZA YATAK ODASI</h6>
//         <p id="u-price-47" >44000 TL </p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-47" id="product-count-1"  value="1"><br>
//         <a name="47" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/yatak-odalari/Screenshot_3.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-48" >WELLA YATAK ODASI</h6>
//         <p id="u-price-48" >36000 TL </p><sub><del>38,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-48" id="product-count-1"  value="1"><br>
//         <a name="48" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/yatak-odalari/Screenshot_4.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-49" >STELLA YATAK ODASI</h6>
//         <p id="u-price-49" >42000 TL </p><sub><del>44,000</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-49" id="product-count-1"  value="1"><br>
//         <a name="49" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/yatak-odalari/Screenshot_5.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-50" >PİETRO YATAK ODASI</h6>
//         <p id="u-price-50" >34000 TL <sub><del></del></sub></p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-50" id="product-count-1"  value="1"><br>
//         <a name="50" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/yatak-odalari/Screenshot_7.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-51" >NEW-LİNE YATAK ODASI</h6>
//         <p id="u-price-51" >30999 TL </p><sub><del>32,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-51" id="product-count-1"  value="1"><br>
//         <a name="51" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/yatak-odalari/Screenshot_6.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-52" >LİMA YATAK ODASI</h6>
//         <p id="u-price-52" >27000 TL </p><sub><del>28,000</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-52" id="product-count-1"  value="1"><br>
//         <a name="52" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/yatak-odalari/Screenshot_8.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-53" >MONACO YATAK ODASI</h6>
//         <p id="u-price-53" >46000 TL <sub><del></del></sub></p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-53" id="product-count-1"  value="1"><br>
//         <a name="53" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/yatak-odalari/Screenshot_9.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-54" >COMO YATAK ODASI</h6>
//         <p id="u-price-54" > 39500 TL  </p><sub><del>41,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-54" id="product-count-1"  value="1"><br>
//         <a name="54" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>`;
// }
// function uykuSeti() {
//   doldur.innerHTML = `  <h5 class="fs-4 bg-warning rounded-3 text-center fw-bold text-white">Uyku Setleri</h5>
//   <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/uyku-setleri/Screenshot_1.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-55" >PLATİNİUM UYKU SETİ</h6>
//         <p id="u-price-55" >22000 TL <sub><del></del></sub></p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-55" id="product-count-1"  value="1"><br>
//         <a name="55" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/uyku-setleri/Screenshot_2.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-56" >STEP UYKU SETİ</h6>
//         <p id="u-price-56" >16999 TL </p><sub><del>17,999</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-56" id="product-count-1"  value="1"><br>
//         <a name="56" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/uyku-setleri/Screenshot_3.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-57" >PREMİUM-LİFE UYKU SETİ</h6>
//         <p id="u-price-57" >24000 TL <sub><del></del></sub></p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-57" id="product-count-1"  value="1"><br>
//         <a name="57" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/uyku-setleri/Screenshot_4.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-58" >GOLD UYKU SETİ</h6>
//         <p id="u-price-58" >25500 TL </p><sub><del>26,000</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-58" id="product-count-1"  value="1"><br>
//         <a name="58" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/uyku-setleri/Screenshot_5.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-59" >MİTO UYKU SETİ</h6>
//         <p id="u-price-59" >26000 TL </p><sub><del>27,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-59" id="product-count-1"  value="1"><br>
//         <a name="59" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/uyku-setleri/Screenshot_6.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-60" >LOVE UYKU SETİ</h6>
//         <p id="u-price-60" >23000 TL -<sub><del></del></sub></p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-60" id="product-count-1"  value="1"><br>
//         <a name="60" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/uyku-setleri/Screenshot_7.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-61" >AURA UYKU SETİ</h6>
//         <p id="u-price-61" >24200 TL </p><sub><del>26,000</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-61" id="product-count-1"  value="1"><br>
//         <a name="61" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/uyku-setleri/Screenshot_8.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-62" >KANYON UYKU SETİ</h6>
//         <p id="u-price-62" >25000 TL </p><sub><del>27,000</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-62" id="product-count-1"  value="1"><br>
//         <a name="62" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/uyku-setleri/Screenshot_1.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-63" >PLATİNİUM UYKU SETİ XL</h6>
//         <p id="u-price-63" > 27500 TL </p><sub><del>30,000</del></sub> 
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-63" id="product-count-1"  value="1"><br>
//         <a name="63" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>`;
// }
// function ortaSehpa() {
//   doldur.innerHTML = `<h5 class="fs-4 bg-warning rounded-3 text-center fw-bold text-white">Orta Sehpalar</h5>
//   <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/sehpalar/Screenshot_1.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-64" >AGEA ORTA SEHPA</h6>
//         <p id="u-price-64" >450 TL <sub><del></del></sub></p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-64" id="product-count-1"  value="1"><br>
//         <a name="64" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/sehpalar/Screenshot_7.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-65" >MASS ORTA SEHPA</h6>
//         <p id="u-price-65" >1100 TL   </p><sub><del>1,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-65" id="product-count-1"  value="1"><br>
//         <a name="65" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/sehpalar/Screenshot_9.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-66" >BELT ORTA SEHPA</h6>
//         <p id="u-price-66" >1400 TL <sub><del></del></sub></p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-66" id="product-count-1"  value="1"><br>
//         <a name="66" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/sehpalar/Screenshot_17.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-67" >TETRA ORTA SEHPA</h6>
//         <p id="u-price-67" >2500 TL </p><sub><del>3,000</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-67" id="product-count-1"  value="1"><br>
//         <a name="67" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/sehpalar/Screenshot_19.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-68" >COMO ORTA SEHPA</h6>
//         <p id="u-price-68" >2000 TL </p><sub><del>2,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-68" id="product-count-1"  value="1"><br>
//         <a name="68" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/sehpalar/Screenshot_18.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-69" >ZEN ORTA SEHPA</h6>
//         <p id="u-price-69" >3000 TL</p> <sub><del>3,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-69" id="product-count-1"  value="1"><br>
//         <a name="69" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/sehpalar/Screenshot_16.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-70" >SLOT ORTA SEHPA</h6>
//         <p id="u-price-70" >4200 TL </p><sub><del>5,000</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-70" id="product-count-1"  value="1"><br>
//         <a name="70" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/sehpalar/Screenshot_15.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-71" >PRORA ORTA SEHPA</h6>
//         <p id="u-price-71" >2900 TL <sub><del></del></sub></p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-71" id="product-count-1"  value="1"><br>
//         <a name="71" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/sehpalar/Screenshot_13.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-72" >FLAME BEYAZ ORTA SEHPA</h6>
//         <p id="u-price-72" > 5500 TL  </p><sub><del>7,000</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-72" id="product-count-1"  value="1"><br>
//         <a name="72" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>`;
// }
// function surguluDolap() {
//   doldur.innerHTML = ` <h5 class="fs-4 bg-warning rounded-3 text-center fw-bold text-white">Sürgülü Dolaplar</h5>
//   <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/sürgülü-dolap/ibiza.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-73" >İBİZA SÜRGÜLÜ DOLAP</h6>
//         <p id="u-price-73" >16700 TL <sub><del></del></sub></p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-73" id="product-count-1"  value="1"><br>
//         <a name="73" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/sürgülü-dolap/lima.png "alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-74" >LİMA SÜRGÜLÜ DOLAP</h6>
//         <p id="u-price-74" >15500 TL  </p> <sub><del>17,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-74" id="product-count-1"  value="1"><br>
//         <a name="74" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/sürgülü-dolap/mito.png"alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-75" >MİTO SÜRGÜLÜ DOLAP</h6>
//         <p id="u-price-75" >19400 TL -<sub><del></del></sub></p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-75" id="product-count-1"  value="1"><br>
//         <a name="75" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/sürgülü-dolap/monaco.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-76" >MONACO SÜRGÜLÜ DOLAP</h6>
//         <p id="u-price-76" >20000 TL </p><sub><del>21,000</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-76" id="product-count-1"  value="1"><br>
//         <a name="76" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/sürgülü-dolap/pietro.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-77" >PİETRO SÜRGÜLÜ DOLAP</h6>
//         <p id="u-price-77" >14000 TL</p> <sub><del>14,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-77" id="product-count-1"  value="1"><br>
//         <a name="77" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/sürgülü-dolap/stella.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-78" >STELLA SÜRGÜLÜ DOLAP</h6>
//         <p id="u-price-78" >21000 TL </p><sub><del>21,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-78" id="product-count-1"  value="1"><br>
//         <a name="78" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/sürgülü-dolap/wella.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-79" >SLOT ORTA SEHPA</h6>
//         <p id="u-price-79" >17200 TL </p><sub><del>18,000</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-79" id="product-count-1"  value="1"><br>
//         <a name="79" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>`;
// }
// function kapakliDolap() {
//   doldur.innerHTML = `  <h5 class="fs-4 bg-warning rounded-3 text-center fw-bold text-white">Kapaklı Dolaplar</h5>
//   <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/kapakli-dolap/linda.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-80" >LİNDA KAPAKLI DOLAP</h6>
//         <p id="u-price-80" >14700 TL <sub><del></del></sub></p>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-80" id="product-count-1"  value="1"><br>
//         <a name="80" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/kapakli-dolap/retro.png "alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-81" >RETRO KAPAKLI DOLAP</h6>
//         <p id="u-price-81" >17500 TL </p><sub><del>18,500</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-81" id="product-count-1"  value="1"><br>
//         <a name="81" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/kapakli-dolap/toscana.png"alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-82" >TOSCANA KAPALI DOLAP</h6>
//         <p id="u-price-82" >18700 TL </p><sub><del></del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-82" id="product-count-1"  value="1"><br>
//         <a name="82" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/kapakli-dolap/venezia.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-83" >VENEZİA KAPAKLI DOLAP</h6>
//         <p id="u-price-83" >20000 TL </p><sub><del>21,000</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-83" id="product-count-1"  value="1"><br>
//         <a name="83" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>
// <div class="col-xl-4 col-md-6 trs  ürünler-h">
//     <div class="koltuk-card">
//         <img src="img/kapakli-dolap/venezia5.png" alt="koltuk">
//       <div class="koltuk-text">
//         <h6 id="u-name-84" >VENEZİA KAPAKLI DOLAP</h6>
//         <p id="u-price-84" >19000 TL</p> <sub><del>20,000</del></sub>
//         <input class=" mb-2 border-1 rounded-pill p-1  u-ınput " type="number" id="p-count-84" id="product-count-1"  value="1"><br>
//         <a name="84" class="add-btn">Sepete Ekle</a>
//       </div>
//     </div>
// </div>`;
// }

                      // !----------SEPETE EKLEME İŞLEMİ---------------------------------! //

const cart_btn=document.getElementsByClassName("add-btn");
const delet_btn=document.getElementsByClassName("delete");


eventListeners();

// ! Sayfa Yüklenirken çalışması için yazılan kod 
function eventListeners(){
  window.addEventListener("load",function(){

// * iconun üstündeki adet sayısını yazdıran kod *************************
let carts=storagedenVeriCek();
// document.getElementById("cart-count").innerText=carts.length;  hata alıyorum 
//* burda ürün sayfasını dolduracak kodalrın devamını yazıyorum****************

let page=this.window.location.pathname;
if(page==`/sepetim.html`) FillSepetimTable();

// * burda butona tıkladığımızda çalışacak fonksiyonu yazıyoruz*******************
     for(let i=0;i<cart_btn.length;i++) cart_btn[i].addEventListener("click",AddCart);
     
  })
}


// !Butonu tıklandığında çalışacak olan kodları ekledim
function AddCart(e){
let id=e.target.name;
let price=parseInt(document.getElementById("u-price-"+id).innerText.split(" ")[0]);
let count=parseInt(document.getElementById("p-count-"+id).value);
let cart={
  product_name:document.getElementById("u-name-"+id).innerText,
  product_price:price,
  product_count:count,
  total_price:price*count
}
console.log(cart);
storageVeriEkle(cart);
 ShowAlert();
}

// !Local Storageden veri Çekme
function storagedenVeriCek(){
  let carts;
  if(localStorage.getItem("carts")===null) carts=[];
  else carts=JSON.parse(localStorage.getItem("carts"));

  return carts;
}

//! local storage  veri ekleme
function storageVeriEkle(data){
  let carts=storagedenVeriCek();
  carts.push(data);
  localStorage.setItem("carts",JSON.stringify(carts));
}

// ! local storage den veri silme

function DeleteCartsFromStorage(id){
  let carts=storagedenVeriCek();
  carts.splice(id,1);
  localStorage.setItem("carts",JSON.stringify(carts));
  FillSepetimTable();
}
// !ürün eklendiğinde çıkacak olan yazı
function ShowAlert(){
  $("#success-alert").css("visibility","visible")
  $(`#success-alert`).show();
  setTimeout(function(){$(`#success-alert`).hide();},2000)
}


// ! storagede var olan verileri gösterme 
function FillSepetimTable(){
  let html=``;
  let carts=storagedenVeriCek();

  for(let i=0;i<carts.length;i++){
    html+=`<tr>`+
    `<td>`+carts[i].product_name+`</td>`+
    `<td>`+carts[i].product_count+`</td>`+
    `<td>`+carts[i].product_price+`</td>`+
    `<td>`+carts[i].total_price+`</td>`+
    `<td><i class="fas fa-trash delete" onclick="DeleteCartsFromStorage(`+i+`)"></i></td>`+
    `</tr>`

    document.getElementById("get-Urun").innerHTML=html;
    
      // document.getElementById("cart-count").textContent=carts.length-1; hata alıyorum
    
  }
 
}


//! üstüne tıklandığı zaman gidecegi sayfaya yönlendiren kod

function GetSepetimPage(){
  window.location.href=`/sepetim.html`;
}

function GetAnaSayfaPage(){
  window.location.href="/index.html"
}





