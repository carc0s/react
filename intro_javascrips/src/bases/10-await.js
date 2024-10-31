//funciones con await y async




const getImage = async () => {
    const apiKey ='lkQVgc1JE0mAaQMRVzbiM5ysOYrvRQn2'

const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
const {data} = await resp.json()
const {url} = data.images.original
const img = document.createElement('img')
img.src = url
document.body.append(img)

console.log(data)


}
getImage()

