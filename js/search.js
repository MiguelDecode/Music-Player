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

            const result = response.artists.items

            console.log(result)

            const drawCards = () => {
                cardsBox.innerHTML = ''

                const totalResult = new DocumentFragment()

                result.forEach((element, index) => {
                    if (result[index].data.visuals.avatarImage !== null) {
                        const card = document.createElement('section')
                        card.classList.add('artist')
                        const bgLink =
                            result[index].data.visuals.avatarImage.sources[0].url
                        card.style.setProperty(
                            'background-image',
                            `url('${bgLink}')`
                        )
                        totalResult.append(card)
                    }
                })

                cardsBox.append(totalResult)
            }

            drawCards()
        })
        .catch((err) => console.error(err))
})
