const foodItems = [
    { id: 1, name: "Пица Маргарита", price: 12.90 },
    { id: 2, name: "Бургер Класик", price: 9.50 },
    { id: 3, name: "Цезар Салата", price: 8.20 }
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