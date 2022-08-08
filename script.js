let bank = [
    {
        name: "uztelecom",
        budget: 200000,
        expensesPerYear: [
            {
                title: "rent",
                total: 13000,
            },
            {
                title: "salaries",
                total: 85000,
            },
            {
                title: "furniture",
                total: 15000,
            },
        ],
    },
    {
        name: "artel",
        budget: 500000,
        expensesPerYear: [{
            title: "rent",
            total: 15000,
        },
        {
            title: "salaries",
            total: 150000,
        },
        {
            title: "furniture",
            total: 25000,
        },
        ],
    },
    {
        name: "gm",
        budget: 1000000,
        expensesPerYear: [{
            title: "rent",
            total: 30000,
        },
        {
            title: "salaries",
            total: 350000,
        },
        {
            title: "furniture",
            total: 90000,
        }
        ]
    }
]


for (let item of bank) {
    item.expensesPerMonth = Math.round(item.expensesPerYear.reduce((a, b) => {
        return a + b.total
    }, 0) / 12)
}

console.log(bank);