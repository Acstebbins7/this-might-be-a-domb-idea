const paragraph = document.querySelector ('p')
paragraph.style.color = 'blue'


const heading = document.querySelector('h1')
heading.style.fontSize = '48px'
paragraph.innerHTML = 'Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.'


const list = document.querySelectorAll('li')


const item13 = list[12]
item13.style.opacity = 0.5
document.querySelectorAll('li')[2].innerHTML = 'I say, "Hi!"'


const image = document.querySelector ('img');
image.src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg'
image.style.height = '300px'


const image2 = document.querySelectorAll('img')[1]
console.log(image2)
image2.style.height = '300px'

// Not Working Below...Need to Debug.
const item16 = list[15]
item16.innerHTML = 'li class="item" id="item-16"</li>'
console.log(item16)