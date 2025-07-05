// ! External

// cth
import"style.css";

function App() {
    return(
        <div>
            <p className="text">Eksternal Style</p>
        </div>
    );
}


// ! Bagaimana cara menggunakan External Style pada React?

// Pertama, kita siapkan file CSS-nya.

// Lalu, pada file component, kita import file styling.

// Selanjutnya, hanya bermain dengan selector (tag, id, class) sesuai dengan kebutuhan. Jika ingin menggunakan selector class, gunakan className. Ini disebabkan karena JavaScript sudah memiliki key word class, maka dari itu di JSX kita menggantinya dengan className.


// !📝  Catatan:

// Jika memberikan External Style pada parent component, maka child component dapat menggunakan style tersebut tanpa perlu di `import`.