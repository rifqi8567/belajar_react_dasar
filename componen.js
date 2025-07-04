// ! Introduction

// *📝 Komponen dalam React adalah pondasi utama dalam memahami struktur dan organisasi aplikasi React.

// ! Konsep Component

// ! Apa itu Component?

// ? Component pada React adalah bagian-bagian dari tampilan UI, seperti: Navbar, Footer, Button, dan sebagainya. Kita bebas menentukan seberapa besar atau kecil komponen yang akan dibuat, sesuai dengan kebutuhan.

//^ Suatu component dapat memberikan keuntungan, seperti:

// Component dapat digunakan berkali-kali.
// Component dapat memiliki logika masing-masing.
// Kode menjadi lebih mudah dibaca dan dikelola.
// Lebih mudah menemukan bug.


// Dari kode yang awalnya menumpuk seperti ini:
<>
{/* navbar */}
<header>
<nav>
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</nav>
</header>

 {/* hero saction */}

 <main>
    <section></section>
    <section></section>
 </main>
</>

 
// Menjadi seperti ini:

{/* <div>
  <Navbar />
  <Hero />
</div> */}


