let a = +prompt('Son kiriting')
while(isNaN(a)){
    a = +prompt('Siz son kiritmadingiz, iltimos son kiriting')
}

let b = +prompt('Sonning darajasini kiriting')
while (isNaN(b)){
    b = +prompt('Darajani son korinishida kiritng')
}

alert(a**b)

let num = +prompt('Zinapoyaning sonini kiriting')
let d = '';

for (let i = 0; i < num; i++) {
    d += '⬜'
    console.log(d);
    
}