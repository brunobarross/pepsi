const imagens = document.querySelectorAll('.switch__content img');
const imgSecao = document.querySelector('.conteudo__wrapper-img img')
const corBg = document.querySelector('main')

imagens.forEach((img)=>{
    img.addEventListener("click", mudaFoto);

})

console.log(imagens)

function mudaFoto(evento){
   if(evento.target == imagens[0]){
    imgSecao.setAttribute('src', 'img/pepsi001.png')
    corBg.style.backgroundColor = "#0261BF";
   } else if(evento.target == imagens[1]){
    imgSecao.setAttribute('src', 'img/pepsi002.png')
    corBg.style.backgroundColor = "#BB0F2C";
   } else if(evento.target == imagens[2]){
    imgSecao.setAttribute('src', 'img/pepsi003.png')
    corBg.style.backgroundColor = "#1F1E1F"
   }
}