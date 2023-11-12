const blog = [
    "The energetic, enthusiastic traits of the fire signs complement the changeable, versatile traits of the air signs", 
    "Earth signs provide the stability that can provide an anchor for water signs", 
    "It's one thing for our sun signs to be compatible. Moon sign compatibility is pure joy",
    "I am so grateful for the moment the stars and planets aligned and led me to you"
]

const myBlog = () => {
    return blog[Math.floor(Math.random() * 4)]
}

