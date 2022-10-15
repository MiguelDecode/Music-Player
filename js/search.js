const artists = document.querySelectorAll('.artist')

artists.forEach((artist) => {
    const bg = artist.getAttribute('data-bg')
    artist.style.backgroundImage = `url('${bg}')`;
})
