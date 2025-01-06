document.addEventListener("DOMContentLoaded", () => {
    const services = [
        { name: "İç Temizlik", price: 100 },
        { name: "Dış Temizlik", price: 80 },
        { name: "Motor Temizliği", price: 150 },
    ];

    const servicesContainer = document.getElementById("services");
    services.forEach(service => {
        const serviceDiv = document.createElement("div");
        serviceDiv.innerHTML = `
        <h3>${service.name}</h3>
        <p>Fiyat: ${service.price} TL</p>
      `;
        servicesContainer.appendChild(serviceDiv);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    //const link = document.createElement("link");
    //link.rel = "stylesheet";
    //link.href = "footer/footer.css"; // Footer'a ait CSS dosyasının yolu
    //document.head.appendChild(link); // CSS dosyasını dinamik olarak <head> içine ekliyoru
    fetch("footer/footer.html") // Dosya yolu doğru mu?
        .then(response => {
            if (!response.ok) {
                throw new Error("Footer yüklenemedi: " + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector("footer").innerHTML = data; // <footer> etiketi doğru mu?
        })
        .catch(error => {
            console.error("Hata: bu", error);
        });
});

// document.addEventListener("DOMContentLoaded", () => {
//     fetch("header/header.html").then(response => {
//         if (!response.ok) {
//             throw new Error("Header yüklenemedi: " + response.statusText);
//         }
//         return response.text();
//     }).then(data => {
//         document.querySelector("header").innerHTML = data; // <header> etiketi doğru mu?
//     })
//         .catch(error => {
//             console.log("Header Yüklenemedi.", error)
//         })
// })

document.getElementById("menu-toggle").addEventListener("click", function () {
    const nav = document.querySelector(".header-nav");
    nav.classList.toggle("active");
});

