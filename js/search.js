const searchInput = document.getElementById('search-input')
const cardsBox = document.getElementById('cards-box')

// API Search General Search

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c4023998bfmshf80a511fce52bd8p1c782ejsn90612cb6d25c',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
    },
}

const typeSearch = 'artists'

searchInput.addEventListener('change', () => {
    fetch(
        `https://spotify23.p.rapidapi.com/search/?q=${searchInput.value}&type=${typeSearch}&offset=0&limit=10&numberOfTopResults=5`,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            console.log(response)

            const data = response.artists.items

            console.log(data)

            const drawCards = data.map((artist) => {
                const card = document.createElement('section')
                const bg = artist.data.visuals.avatarImage.sources[0].url
                card.style.backgroundImage = `url(${bg})`
                const nameCard = document.createElement('h3')
                const name = artist.data.profile.name
                nameCard.textContent = name
                card.appendChild(nameCard)

                return card
            })

            cardsBox.appendChild(drawCards())
        })
        .catch((err) => console.error(err))
})

// Método para pintar las cards de los artistas
const artists = document.querySelectorAll('.artist')

artists.forEach((artist) => {
    const bg = artist.getAttribute('data-bg')
    artist.style.backgroundImage = `url('${bg}')`
})
