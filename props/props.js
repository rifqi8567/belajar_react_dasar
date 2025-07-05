// ! Introduction

// * 📝 Props adalah singkatan dari Properties.

// !Props Data
// ^Props berguna untuk mengoper data dari parent component ke child component. Bersifat satu arah (parent ke child), dan dapat menjadikan komponen lebih dinamis.

// ? Props dapat digunakan untuk mengoper data: string, number, boolean, array, object, dan function.


// lihat image.png

// Sehingga nantinya akan menjadi seperti ini:

// Card.jsx
function Card(props) {
  return (
    <div>
      <img src={props.img} />
      <h2>{props.name}</h2>
    </div>
  );
}

// App.jsx
function App(){
  return (
    <>
      <Card img="html.png" name="HTML Dasar" />
      <Card img="css.png" name="CSS Dasar" />
      <Card img="javascript.png" name="javascript" />
    </>
  )
}


// 📝  Catatan:

// !Mengoper props pada komponen, mirip seperti mengoper argumen ke dalam function.


