// ! Introduction

// ^ 📝 Styling merupakan hal yang tidak bisa dipisahkan dari web development. Dengan memberikan styling, tampilan website menjadi lebih indah.

//  ! Inline

// ! Hal yang Harus Diperhatikan dalam Menerapkan Inline Style

// *Pertama, yang perlu disiapkan adalah prop style. Prop ini berisi objek JavaScript dengan key dan value styling yang akan kita berikan.

// cth

function App() {
    const styles = {
        color: "blue",
        fontSize: "16px",
        backgroundColor: "lightray",

    };

return(
    <>
    <p style={styles}>ini adalah teks dengan inline style</p>
    </>
)
}


// atau kek gini

function Warna() {
    return(
        <>
        <p 
        style={{
            color: "red",
            fontSize: "16px",
            backgroundColor: "lightgray"
        }}>
            ini adalah text dengan inline style2
        </p>
        </>
    )
}


// ^Key pada objek style yang memiliki lebih dari satu kata, ditulis dengan gaya penulisan camelCase.

// Contohnya seperti: fontSize, dan backgroundColor.


// !Kenapa camelCase?

// *Berhubung kita menulisnya di dalam JSX yang merupakan JavaScript, maka kita harus mengikuti kaidah penulisan pada bahasa tersebut.