
const inputBtn = document.getElementById("color-input-btn")
const colorPicker = document.getElementById("color-picker")
const colorLabel = document.getElementById("color-picker-label")
let color = colorPicker.value
colorLabel.value = colorPicker.value

colorPicker.addEventListener("input", (event) => { colorLabel.value = colorPicker.value })
colorLabel.addEventListener("input", (event) => { 
    if(colorLabel.value.charAt(0)==="#")    
    {colorPicker.value = colorLabel.value}
    else { colorPicker.value = "#" + colorLabel.value }
})

function renderColors(){
    if(color.charAt(0)==="#") {color = color.substring(1)}
    
        fetch(`https://www.thecolorapi.com/scheme?hex=${color}`)
        .then(res => res.json())
        .then(scheme => {
            for (i=0; i < scheme.colors.length; i++){
            document.getElementById(`div${i+1}`).style.backgroundColor=scheme.colors[i].hex.value
            document.getElementById(`p${i+1}`).textContent=scheme.colors[i].hex.value 
            }
        })
    }

renderColors()

inputBtn.addEventListener( "click" , function() {    
    color = colorLabel.value
    renderColors()    
})

