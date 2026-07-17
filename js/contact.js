// ==========================
// CONFIG
// ==========================

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxDfDhQPEyAHnmOzl8lEjyu44OYSvD_Ksmn6vQKfhNoaUh5HVpxoePZgBhzqr73RZN5Jw/exec";

const WHATSAPP_NUMBER = "6285725025019";


// ==========================
// ELEMENTS
// ==========================

const form = document.getElementById("contactForm");

const submitBtn = document.getElementById("submitBtn");
const submitText = document.getElementById("submitText");

const overlay = document.getElementById("loadingOverlay");
const loadingTitle = document.getElementById("loadingTitle");
const loadingDesc = document.getElementById("loadingDesc");
const spinner = document.querySelector(".spinner");


// ==========================
// FORM SUBMIT
// ==========================

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {

        name: document.getElementById("name").value.trim(),

        contact: document.getElementById("contact").value.trim(),

        company: document.getElementById("company").value.trim(),

        need: document.getElementById("need").value,

        message: document.getElementById("message").value.trim()

    };


    // ==========================
    // VALIDATION
    // ==========================

    if (!data.name) {
        alert("Nama wajib diisi.");
        return;
    }

    if (!data.contact) {
        alert("Email / WhatsApp wajib diisi.");
        return;
    }

    if (!data.need || data.need === "") {
        alert("Silakan pilih jenis kebutuhan.");
        return;
    }

    if (!data.message) {
        alert("Pesan tidak boleh kosong.");
        return;
    }


    // ==========================
    // LOADING
    // ==========================

    overlay.classList.add("show");

    submitBtn.disabled = true;

    submitText.textContent = "Mengirim...";


    try {

        // ==========================
        // SEND TO GOOGLE SHEET
        // ==========================

        const response = await fetch(SCRIPT_URL, {

            method: "POST",

            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },

            body: JSON.stringify(data)

        });

        const result = await response.json();

        if (!result.success) {
            throw new Error(result.message);
        }


        // ==========================
        // SUCCESS UI
        // ==========================

        spinner.innerHTML = '<i class="ri-checkbox-circle-fill"></i>';

        spinner.style.border = "none";
        spinner.style.animation = "none";
        spinner.style.fontSize = "70px";
        spinner.style.color = "#2F6C33";

        loadingTitle.textContent = "Berhasil!";

        loadingDesc.innerHTML =
            "Data berhasil dikirim.<br>Mengarahkan ke WhatsApp...";


        // ==========================
        // WHATSAPP MESSAGE
        // ==========================

        const message = `Halo PT Ade Pratama Naturindo,

Saya ingin menghubungi Anda.

━━━━━━━━━━━━━━

Nama
${data.name}

Email / WhatsApp
${data.contact}

Perusahaan
${data.company}

Jenis Kebutuhan
${data.need}

Pesan
${data.message}

━━━━━━━━━━━━━━

Dikirim melalui Website PT Ade Pratama Naturindo`;

        const encoded = encodeURIComponent(message);


        setTimeout(() => {

            window.open(
                `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`,
                "_blank"
            );

            form.reset();

            resetLoading();

        }, 2000);

    }

    catch (error) {

        console.error(error);

        alert("Terjadi kesalahan. Silakan coba lagi.");

        resetLoading();

    }

});



// ==========================
// RESET LOADING
// ==========================

function resetLoading() {

    overlay.classList.remove("show");

    submitBtn.disabled = false;

    submitText.textContent = "Kirim Pesan";

    spinner.innerHTML = "";

    spinner.style = "";

    loadingTitle.textContent = "Mengirim...";

    loadingDesc.textContent = "Mohon tunggu sebentar.";

}