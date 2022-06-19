// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function getNewImage(cur){
    cur.classList.add("animate__animated", "animate__shakeY");
    
    fetch('home/GetImage')
        .then(function(response){
            return response.json()
        })
        .then(function(json){
            const image = json[0]['url'];
            console.log(image)
            
            if (cur.id === 'img-one') {
                document.getElementById('img-two').setAttribute('src', image)
            } else {
                document.getElementById('img-one').setAttribute('src', image)
            }
        })
}

// add event listener to img tags
const images = document.getElementsByTagName('img');
for (let i=0; i<images.length; i++)
{
    images[i].addEventListener('click', function() {
        getNewImage(this);
        
        this.addEventListener('animationend', function() {
            this.classList.remove('animate__animated', 'animate__shakeY');
        })
    });
}
