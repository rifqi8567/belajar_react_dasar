// ! Props Children

// perhatikan gambar image2.png

// Berikut contoh kodenya:

function PageLayout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
}

// ! Dari kode di atas, PageLayout dipanggil dengan tag pembuka dan tag penutup untuk membungkus Home. Dengan begitu, Home akan dioper dan masuk kedalam props.children.

