const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	
	const table = document.getElementsByTagName('table')[0];
	const newTr = document.createElement('tr');
	newTr.id="ans";
	const newTd1 = document.createElement('td');
    
	newTd1.colSpan = 2;
	newTr.appendChild(newTd1)
	table.appendChild(newTr);

	prices = document.querySelectorAll(".price");
	
	const totalPrice = Array.from(prices).reduce((total, price) =>total + parseFloat(price.textContent), 0);
	newTd1.textContent =`Total: ${totalPrice}`;
};

getSumBtn.addEventListener("click", getSum);

