let dots = document.querySelector('.dots');
let quant = document.querySelectorAll('.slides .image');
let atual = 0;
let imagem = document.getElementById('atual');
let next = document.getElementById('next');
let voltar = document.getElementById('voltar');
let loop = true;

for(let i=0; i < quant.length; i++){
    let div = document.createElement('div');
    div.id = i;
    dots.appendChild(div);
};

document.getElementById('0').classList.add('imgAtual');

let pos = document.querySelectorAll('.dots div');

for(let i=0; i< pos.length; i++){
    pos[i].addEventListener('click', ()=>{
        atual = pos[i].id;
        loop = false;
        slide();
    })
}

voltar.addEventListener('click', ()=>{
    atual--;
    loop = false;
    slide();
});

next.addEventListener('click', ()=>{
    atual++;
    loop = false;
    slide();
});

function slide(){
    if(atual >= quant.length){
        atual = 0
    } else if(atual < 0) {
        atual = quant.length-1
    };
    document.querySelector('.imgAtual').classList.remove('imgAtual');
    imagem.style.marginLeft = -800 * atual + 'px';
    document.getElementById(atual).classList.add('imgAtual');
};

setInterval(()=>{
    if(loop){
        atual++;
        slide()
    }else {
        loop = true;
    }
},4000)