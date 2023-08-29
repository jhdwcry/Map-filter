const peopleArr = [{
        id: 1,
        name: "Julia Roberts",
        age: 55,
        photo: 'img/julia-roberts.jpg',
        gender: 'female',
    },
    {
        id: 2,
        name: "Keanu Reeves",
        age: 58,
        photo: 'img/keanu-reeves.jpg',
        gender: 'male',
    },
    {
        id: 3,
        name: " Robert Pattinson",
        age: 37,
        photo: 'img/robert-pattinson.jpg',
        gender: 'male',
    },
    {
        id: 4,
        name: "Tom Hanks",
        age: 67,
        photo: 'img/tom-hanks.jpg',
        gender: 'male',
    },
    {
        id: 5,
        name: "Angelina Jolie",
        age: 48,
        photo: 'img/Angelina-Jolie.jpg',
        gender: 'female',
    },

    {
        id: 6,
        name: "Jennifer Lawrence",
        age: 32,
        photo: 'img/Jennifer-Lawrence.jpg',
        gender: 'female',
    },
    {
        id: 7,
        name: "Anne Hathaway",
        age: 40,
        photo: 'img/Anne-Hathaway.jpg',
        gender: 'female',
    },
    {
        id: 7,
        name: "Bradley Cooper",
        age: 48,
        photo: 'img/Bradley-Cooper.jpg',
        gender: 'male',
    },
    {
        id: 8,
        name: "Meryl Streep",
        age: 74,
        photo: 'img/Meryl-Streep.jpg',
        gender: 'female',
    },
    {
        id: 9,
        name: "Tom Holland",
        age: 27,
        photo: 'img/Tom-Holland.jpg',
        gender: 'male',
    },
    {
        id: 10,
        name: "Jenna Ortega",
        age: 20,
        photo: 'img/Jenna-Ortega.jpg',
        gender: 'female',
    },
    {
        id: 11,
        name: "Zendaya",
        age: 26,
        photo: 'img/Zendaya.jpg',
        gender: 'female',
    },
    {
        id: 12,
        name: "Storm Reid",
        age: 19,
        photo: 'img/Storm-Reid.jpg',
        gender: 'female',
    },
    {
        id: 13,
        name: "Kelvin Harrison Jr.",
        age: 28,
        photo: 'img/Kelvin-Harrison.jpg',
        gender: 'male',
    },
    {
        id: 14,
        name: "Tom Cruise",
        age: 61,
        photo: 'img/Tom-Cruise.jpg',
        gender: 'male',
    },
    {
        id: 15,
        name: "Zac Efron",
        age: 35,
        photo: 'img/Zac-Efron.jpg',
        gender: 'male',
    },
]

window.addEventListener('load', function () {
    const usersContainer = document.querySelector('.users-container');
    const genderRadio = document.querySelectorAll('[type="radio"]');
    const ageRange = document.querySelector('#ageFilter');
    const searchRange = document.querySelector('#nameFilter')

    const renderPerson = (persons) => {
        const list = persons.map(person => {
            return (
                `
                    <div class="user">
                        <div class="person-photo">
                            <img src="${person.photo}" class="img-fluid" alt="${person.name}">
                        </div>
                        <div class="person-name">${person.name}</div>
                        <div class="person-age">${person.age}</div>
                        <div class="person-gender">${person.gender}</div>
                    </div>
                `
            )
        }).join("")
        usersContainer.innerHTML = list
    }
    renderPerson(peopleArr)

    const state = {
        gender: "all",
        age: '100',
        name: ""
    }

    function getGenderVal() {
        genderRadio.forEach(item => {
            item.addEventListener('click', (event) => {

                let val = event.target.value
                state.gender = val

                const filteredForGender = mainFilter()
                renderPerson(filteredForGender)
            })
        })
    }
    getGenderVal()

    function getAgeVal() {
        ageRange.addEventListener('click', (event) => {

            let val = event.target.value
            state.age = val

            const filteredForAge = mainFilter()
            renderPerson(filteredForAge)
        })
    }
    getAgeVal()

    function getNameSearch() {
        searchRange.addEventListener('input', (event) => {

            let val = event.target.value.toLowerCase()
            state.name = val

            const filteredForName = mainFilter()
            renderPerson(filteredForName)
        })
    }
    getNameSearch()


    function mainFilter() {
        const filtered = peopleArr.filter(item => {
            const setAge = item.age <= state.age

            const setGender = state.gender === 'all' ? peopleArr :
                item.gender === state.gender

            const setName = state.name === '' ? peopleArr : item.name.toLowerCase().includes(state.name)

            return setAge && setGender && setName
        })
        return filtered
    }



})