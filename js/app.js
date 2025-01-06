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
