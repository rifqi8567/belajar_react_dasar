import styles from './Navbar.module.css';

function Navbar() {
    return(
        <>
        <p className={styles.text}>css module</p>
        </>
    )
}


// ! Jika diperhatikan, pemberian nama file diberi ekstensi .module.css, kemudian *import* dilakukan dengan memberikan namastyles`.

// !Lalu pada className diisi dengan styles.text, yang mana .text diambil dari styling yang sudah disiapkan.