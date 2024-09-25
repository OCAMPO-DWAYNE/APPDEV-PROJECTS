
const quote = ['Waste no more time arguing what a good man should be. Be One - Marcus Aurelius',
'If it is not right, do not do it, if it is not true, do not say it.- Marcus Aurelius',
'The best revenge is not to be like your enemy. - Marcus Aurelius',
'Choose not to be harmed — and you won’t feel harmed. Don’t feel harmed — and you haven’t been. - Marcus Aurelius',
'You could leave life right now. Let that determine what you do and say and think. - Marcus Aurelius',
'Be tolerant with others and strict with yourself.'
]
const color = document.querySelector('.color')
btn.addEventListener('click',() =>{
    let hexColor = '#'

    for(let i =0; i<6;i++){
        hexColor += quote[getRandomNumber()]
    }
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})
getRandomNumber = () =>{
    return Math.floor(Math.random()* quote.length)
}