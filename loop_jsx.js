// ! Rendering Conditional & Loop

// ^ Conditional
// ^Opsi pertama, kita bisa menggunakan perintah conditional, seperti: if else dan switch yang diberi return.

// cth

// function App() {
//     let isLoggedIn = true;
//     if(isLoggedIn){
//     return <h1>Welcome back!</h1>;
//     } else{
//         return <h1>Please log in.</h1>;
//     }
// }

// ^ atau kamu juga bisa menggunakan ternary operator, jika ingin menyisipkan conditional kedalam JSX seperti ini.

// function App() {
//   let isLoggedIn = true;
//   let message = isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>;

//   return (
//     <div>
//       {message}
//     </div>
//   );
// }

// !📝  Catatan:

// Ternary operator lebih sering digunakan untuk melakukan pengondisian pada JSX.

// ! Loop

// *Loop rendering bisa kita lakukan dengan menggunakan map(). Perlu diingat bahwa, map() hanya dapat digunakan untuk data array.

function App () {
    let lisBuah = ["jeruk", "Rambutan", "pepaya"]

    return(
        <ul>
            {lisBuah.map((item, index) => (
                <li key = {index}>{item}</li>
            ))}
        </ul>
    );
}


// ^ Apa itu <> dan </> di React?

// ?React Fragment adalah cara untuk membungkus beberapa elemen JSX tanpa harus menambahkan elemen HTML baru seperti <div>.

// ?Jadi, <> itu mirip tag pembungkus kosong.

// Di React, return JSX harus punya satu elemen root. Misalnya kamu mau return 2 <ul>, kamu harus bungkus supaya JSX valid, contoh:

return (
  <div>
    <ul>...</ul>
    <ul>...</ul>
  </div>
)


return (
  <>
    <ul>...</ul>
    <ul>...</ul>
  </>
)



// | Tanpa Fragment                               | Dengan Fragment (`<> ... </>`)                             |
// | -------------------------------------------- | ---------------------------------------------------------- |
// | Harus ada 1 tag pembungkus, biasanya `<div>` | Bisa langsung banyak elemen tanpa pembungkus HTML tambahan |


