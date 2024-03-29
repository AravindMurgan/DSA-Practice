// Hoisiting
// debugger
// console.log(abc)
// let abc = 8;
// abcFunc()


// function abcFunc() {
//     console.log('my name is aravind')
// }

//How JS functions works
// debugger
// var x = 1;
// console.log(x);

// a();
// b();

// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b() {
//     var x = 100;
//     console.log(x);
// }

//Block scopes//
// {
//     console.log(c)
//     var a = 10;
//     let b = 20;
//     let c = 30;

// }

//Closures//
// function x() {
//     let x = 10;
//     function y() {
//         console.log(x)
//     }
//     y()
// }
// x()
// {
//     let x = 10;
//     function y() {
//         console.log(x)
//     }
//     y()
// }
// function x() {
//     z = 100;
//     let abc = function () {
//         console.log(z)
//     }
//     abc()
// }
// x()

// function x() {
//     let g = 10;
//     return function y(val) {
//         console.log(g);
//         console.log(val)

//     }
// }

// var z = x()
// console.log(z(50))

// function x() {
//     var i = 10;
//     setTimeout(() => {
//         console.log(i)
//     }, 5000)
//     console.log('namaste javascript')
// }

// x()

const addressApiService = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    "id": 1,
                    "Address": "339 Macpherson Lane",
                    "Pin code": "768 11",
                    "customerEmail": "lsallter0@hubpages.com",
                    "contact": "191-405-1109"
                },
                {
                    "id": 2,
                    "Address": "7268 Artisan Alley",
                    "Pin code": "",
                    "customerEmail": "akillbey1@europa.eu",
                    "contact": "123-774-0910"
                },
                {
                    "id": 3,
                    "Address": "618 Vera Center",
                    "Pin code": 25508,
                    "customerEmail": "sgreenin2@fastcompany.com",
                    "contact": "373-145-5025"
                },
                {
                    "id": 4,
                    "Address": "09494 Tennessee Circle",
                    "Pin code": "",
                    "customerEmail": "atrippick3@newyorker.com",
                    "contact": "830-640-2733"
                },
                {
                    "id": 5,
                    "Address": "23 Marquette Pass",
                    "Pin code": "98600-000",
                    "customerEmail": "tsywell4@java.com",
                    "contact": "908-558-1070"
                },
                {
                    "id": 6,
                    "Address": "66590 Eastwood Circle",
                    "Pin code": "",
                    "customerEmail": "llyptratt5@illinois.edu",
                    "contact": "445-628-4676"
                },
                {
                    "id": 7,
                    "Address": "1275 Fulton Crossing",
                    "Pin code": 24400,
                    "customerEmail": "ebyrne6@dell.com",
                    "contact": "164-756-5434"
                },
                {
                    "id": 8,
                    "Address": "64 Sullivan Trail",
                    "Pin code": "",
                    "customerEmail": "dgilbride7@ed.gov",
                    "contact": "706-667-6734"
                },
                {
                    "id": 9,
                    "Address": "10 Judy Drive",
                    "Pin code": 412545,
                    "customerEmail": "sweekly8@usatoday.com",
                    "contact": "105-875-7448"
                },
                {
                    "id": 10,
                    "Address": "44 Mcbride Hill",
                    "Pin code": "4805-005",
                    "customerEmail": "pkither9@webmd.com",
                    "contact": "884-448-8680"
                },
                {
                    "id": 11,
                    "Address": "0 Lyons Hill",
                    "Pin code": "",
                    "customerEmail": "crebanksa@umich.edu",
                    "contact": "781-142-8616"
                },
                {
                    "id": 12,
                    "Address": "10 Farwell Center",
                    "Pin code": "",
                    "customerEmail": "parnaob@people.com.cn",
                    "contact": "272-292-3897"
                },
                {
                    "id": 13,
                    "Address": "85 Butternut Crossing",
                    "Pin code": 2431,
                    "customerEmail": "fblankleyc@state.tx.us",
                    "contact": "531-647-2172"
                },
                {
                    "id": 14,
                    "Address": "7 Bunting Parkway",
                    "Pin code": 12006,
                    "customerEmail": "rmcgrathd@redcross.org",
                    "contact": "180-184-4019"
                },
                {
                    "id": 15,
                    "Address": "6 Melvin Way",
                    "Pin code": "",
                    "customerEmail": "eclutherame@china.com.cn",
                    "contact": "996-107-5565"
                },
                {
                    "id": 16,
                    "Address": "277 Twin Pines Pass",
                    "Pin code": 396458,
                    "customerEmail": "abatef@photobucket.com",
                    "contact": "685-319-9251"
                },
                {
                    "id": 17,
                    "Address": "83921 Mariners Cove Place",
                    "Pin code": 625504,
                    "customerEmail": "harmatageg@behance.net",
                    "contact": "746-684-6115"
                },
                {
                    "id": 18,
                    "Address": "8 Moulton Parkway",
                    "Pin code": "",
                    "customerEmail": "sblivenh@webmd.com",
                    "contact": "413-481-5962"
                },
                {
                    "id": 19,
                    "Address": "87490 Melby Terrace",
                    "Pin code": 59762,
                    "customerEmail": "jcopperi@virginia.edu",
                    "contact": "793-871-7819"
                },
                {
                    "id": 20,
                    "Address": "1 Colorado Hill",
                    "Pin code": "77370-000",
                    "customerEmail": "amaclleesej@arstechnica.com",
                    "contact": "619-729-4183"
                }]);
        }, 1000)
    })
}

class AddressListComponent {
    constructor() {
        this.limit = 5;
        this.totalPages = 0;
        this.currentPage = 1;
        this.init();
    }

    init() {
        this.table = document.querySelector('table tbody');
        addressApiService().then((response) => {
            this.records = response;
            this.totalPages = this.records.length ? this.records.length / this.limit : 1;
            this.setTableRows();
        });
        this.prev = document.querySelector('.prev');

        this.prev.addEventListener('click', (event) => {
            event.preventDefault();
            if (this.currentPage > 1) {
                this.currentPage--;
                this.removeDisabled();
                this.setTableRows();
            } else {
                this.prev.setAttribute('disabled', 'disabled')
            }

        });

        this.next = document.querySelector('.next');

        this.next.addEventListener('click', (event) => {
            event.preventDefault();
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.removeDisabled();
                this.setTableRows();
            } else {
                this.next.setAttribute('disabled', 'disabled');
            }
        });
    }

    removeDisabled() {
        this.prev.removeAttribute('disabled');
        this.next.removeAttribute('disabled');
    }

    setDisplayRecords() {
        document.querySelector('.pageTotal i').innerHTML = this.currentPage;
        this.start = (this.currentPage - 1) * this.limit;
        this.end = (this.currentPage * this.limit);
        this.displayRecords = this.records.slice(this.start, this.end);
    }

    setTableRows() {
        this.setDisplayRecords();
        this.table.innerHTML = '';
        this.displayRecords.forEach((address, i) => {
            let row = this.table.insertRow(i);
            for (const key of Object.keys(address).reverse()) {
                let cell = row.insertCell(key);
                const addressValue = address[key];
                let cellTextNode = document.createTextNode(addressValue);
                cell.appendChild(cellTextNode);
            }
        })
    }
}

new AddressListComponent();
