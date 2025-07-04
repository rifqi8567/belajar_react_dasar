// ! JSX

// *Sebelum mengetahui apa itu JSX, cobalah perhatikan kode yang ada di dalam file App.jsx :

function App () {
  return (
    <div>
      <h1>Hello, World!</h1>;
      <h2>Selamat Datang Terra</h2>
    </div>
  )
} 


// ! Apa itu JSX?

// ^ JSX adalah adalah ekstensi sintaksis JavaScript di dalam React, sehingga memungkinkan untuk menulis markup yang mirip HTML di dalam file JavaScript.

// ^ ✅ JSX = JavaScript XML

// ^ Selain itu, kita juga bisa menyisipkan kode JavaScript ke dalam JSX dengan menambahkan kurung kurawal {}, seperti ini:

const App = () => {
  let nama = 'Terra'

  return (
    <div>
      <h1>Hello, World!</h1>;
      <h2>Selamat Datang {nama}</h2>
    </div>
  )
} 


// ! Aturan Penggunaan JSX

//  ^ 1 Satu element yang di-return
// ^Komponen tidak dapat me-return lebih dari satu element. Maka dari itu, harus dibungkus suatu element :

<div>
  {/* beberapa element di dalam */}
</div>


// ^ 2 Semua tag harus ditutup

// ^Sudah sewajarnya jika menulis tag, akan ada tag pembuka dan tag penutup. Untuk tag yang bersifat single tag pun, juga harus ditutup. Contoh:

//   <div>
//     <p></p>
//     <img />
//     <br />
//   </div>


//  ^3. Penggunaan camelCase

// ^JSX pada dasarnya adalah JavaScript. Sehingga, jika ada penulisan yang memiliki penamaan lebih dari 1 kata, maka gunakan format camelCase. Contoh:

//   <img 
//     src=""
//     className=""   //camelCase
//     onClick={}    // camelCase
//   />



// 📝  Catatan:

// * Perlu diperhatikan bahwa JSX akan di-return untuk dapat ditampilkan.



