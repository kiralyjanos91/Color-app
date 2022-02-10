let color = "#CD5C5C"
document.getElementById("color-input").value = color
const inputBtn = document.getElementById("color-input-btn")


function renderColors(){
    if(color.charAt(0)==="#") {color = color.substring(1)}
    
        fetch(`https://www.thecolorapi.com/scheme?hex=${color}`)
        .then(res => res.json())
        .then(scheme => {
            for (i=0; i < scheme.colors.length; i++){
            document.getElementById(`div${i+1}`).style.backgroundColor=scheme.colors[i].hex.value 
            }
        })
    }

renderColors()

inputBtn.addEventListener( "click" , function() {    
    color = document.getElementById("color-input").value
    renderColors()    
})

