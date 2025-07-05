// ! CSS Module

// *Ketika menggunakan External Style, mungkin kita akan menemukan masalah seperti ini:

/* style.css */
// .text {
//   color: "blue",
//   font-size: "16px",
//   background-color: "lightgray",
// };
// Navbar.jsx
import "style.css";

function Navbar() {
  return (
    <div>
      <p className="text">teks dengan external style</p>
    </div>
  );
}
// Card.jsx
function Card() {
  return (
    <div>
      <span className="text">Card Text</span>
    </div>
  );
}


// ! Apa itu CSS Modules?

// CSS Modules adalah sebuah metode untuk mengatur styling, yang memungkinkan kita untuk mengisolasi styles dalam sebuah komponen.

// Ini bermanfaat untuk menghindari konflik nama kelas (class name) dan memastikan bahwa style hanya berlaku untuk komponen tertentu.

