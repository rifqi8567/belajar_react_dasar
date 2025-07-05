// ! Membuat State

// ?Lalu, bagaimana caranya membuat State?

// ! Di sini, kita membutuhkan useState yang berasal dari react.

// di luar componen
import {useState} from "react";

// di dlm componen
const [state, setState] = useState("value")

// useState akan mengembalikan data dalam bentuk array, sehingga ketika dideklarasi bisa kita tulis dengan cara destructure seperti ini [state, setState]. Dari hasil destructure, kita mendapatkan state yang bernilai data yang ingin disimpan, dan setState adalah function untuk mengubah data tersebut.


// cth
import { useState } from "react";

function Profile() {
    const [nama, setNama] = useState("terra")

    return(
        <>
        <img  />
        <h2>{nama}</h2>
        </>
    )
}


// !📝 Mengubah State, akan kita pelajari kembali pada lesson: Event Handling.

