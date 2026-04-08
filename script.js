const foodItems = [
    { id: 1, name: "Пица Маргарита", price: 12.90 },
    { id: 2, name: "Бургер Класик", price: 9.50 },
    { id: 3, name: "Цезар Салата", price: 8.20 }
    { id: 4, name: "Шоколадова торта", price: 6.30 },
    { id: 5, name: "Чийзкейк", price: 4.10 },
    { id: 6, name: "Макарони", price: 3.20 }
    { id: 7, name: "Палачинки", price: 5.30 }
];

const app = document.getElementById('app');

foodItems.forEach(item => {
    app.innerHTML += `
        <div class="card">
            <h3>${item.name}</h3>
            <p>Цена: ${item.price} лв.</p>
            <button onclick="order(${item.id})">Поръчай</button>
        </div>
    `;
});

function order(id) {
    alert("Продукт " + id + " е добавен в количката!");
}
