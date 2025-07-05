// ! onChange

//* onChange adalah prop yang umum digunakan pada elemen seperti <input>, <textarea> dan <select>. Ini memungkinkan kita menangani perubahan nilai pada elemen tersebut.

// cth

function App() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return <input type="text" onChange={handleChange} />;
}

