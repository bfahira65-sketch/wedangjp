// ==============================
// WEDANGJP MAIN.JS
// ==============================

// Saldo default
if(localStorage.getItem("saldo")==null){
    localStorage.setItem("saldo","0");
}

// ==============================
// MAIN GAME
// ==============================

function openTopup(){

    if(localStorage.getItem("loginStatus")!="aktif"){

        alert("❌ Silakan login terlebih dahulu.");

        return;

    }

    document.getElementById("saldoDompet").value =
        "Rp " + Number(localStorage.getItem("saldo")||0).toLocaleString("id-ID");

    document.getElementById("saldoGame").value =
        "Rp " + Number(localStorage.getItem("saldo")||0).toLocaleString("id-ID");

    document.getElementById("topupModal").style.display="flex";

}

function closeTopup(){

    document.getElementById("topupModal").style.display="none";

}

function kirimTopup(){

    let nominal=document.getElementById("nominalTopup").value;

    if(nominal==""){

        alert("❌ Masukkan nominal top up.");

        return;

    }

    localStorage.setItem("nominalDeposit",nominal);

    window.location.href="deposit.html";

}
