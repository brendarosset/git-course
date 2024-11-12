// Add your JavaScript code here
// This file is used to add interactivity and functionality to the web page

// Example code: Change the text of an element when clicked
//window.onload = function() {
const button = document.querySelector('.button');
const text = document.querySelector('.text');
// input element with id "username" on change
document.getElementById('username').addEventListener('input', function() {
    var username = document.getElementById('username').value;
    // regex to check if username has at least 1 capital letter, 1 special character, 1 number and is at least 8 characters long
    var regex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/;
    if (regex.test(username)) {
        document.getElementById('username').style.borderColor = 'green';
    } else {
        document.getElementById('username').style.borderColor = 'red';
    }

});

function getMonthlyData() {
    const months = [
        'january', 'february', 'march', 'april', 'may', 
        'june', 'july', 'august', 'september', 'october', 
        'november', 'december'
    ];

    return months.map(month => {
        const income = document.getElementById(`income-${month}`).value;
        const expenses = document.getElementById(`expenses-${month}`).value;
        return {
            month: month.charAt(0).toUpperCase() + month.slice(1),
            income: parseFloat(income) || 0,
            expenses: parseFloat(expenses) || 0
        };
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    const chartTab = document.getElementById('chart-tab');
    const ctx = document.getElementById('myChart').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Income',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Expenses',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    chartTab.addEventListener('click', () => {
        const monthlyData = getMonthlyData();
        const incomeData = monthlyData.map(data => data.income);
        const expensesData = monthlyData.map(data => data.expenses);
        const labels = monthlyData.map(data => data.month);

        myChart.data.labels = labels;
        myChart.data.datasets[0].data = incomeData;
        myChart.data.datasets[1].data = expensesData;
        myChart.update();
    });
});
//}