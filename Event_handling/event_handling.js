// !Introduction

// * 📝 Interaktivitas adalah salah satu kunci penting dalam pengembangan website modern.

// ^ Event Handling merupakan salah satu aspek yang sangat penting. Sama ketika belajar JavaScript DOM, di React kita dapat memberikan event handling untuk menangani berbagai macam interaksi.


// ! onClick

// ! Menangani klik mouse pada suatu element, kita bisa menggunakan props onClick. Bisa diletakkan pada semua element yang ingin diberi klik.

// cth

function App() {
    function handleClick() {
        console.log("dunia")
    }
    return(
        <>
        <h1 onClick={handleClick}>hello</h1>
        </>
    )
}

// * Kode di atas, akan menampilkan "dunia" pada console jika text "hallo" diklik.

// cth kombinasi dengan state

function App1() {
    const [greeting, setGreeting] = useState("say")
    function handleClick1 () {
        setGreeting("hello")
    }

    return(
        <>
        <h1 onClick={handleClick1}>{greeting}</h1>
        </>
    )
}


// & Pada kode di atas, text "Say" yang muncul akan berubah menjadi "Hello" jika diklik.

// ^Text <h1> di atas berasal dari state greeting dan dapat diklik karena memiliki onClick yang akan memanggil function handleClick. Ketika diklik maka function handleClick dijalankan untuk mengubah state "Say" menjadi "Hello" menggunakan setGreeting("Hello").


// Latihan
// Untuk mengasah pemahamanmu, silakan ikuti eksperimen berikut ini:

// Buat komponen `Counter.
// Buat state counter bernilai `0.
// Memiliki button - dan +.
// Menampilkan angka 0 yang berasal dari state. Diletakkan antara button.
// Beri onClick pada button, supaya angka dapat berkurang dan dapat bertambah sesuai dengan tombolnya.


import React, { useState } from 'react';

function Counter() {
  // 1. State bernama counter dengan nilai awal 0
  const [counter, setCounter] = useState(0);

  // 2. Fungsi untuk menambah dan mengurangi
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* 3. Tombol -, angka, dan tombol + */}
      <button onClick={decrement}>-</button>
      <span style={{ margin: '0 20px' }}>{counter}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;

