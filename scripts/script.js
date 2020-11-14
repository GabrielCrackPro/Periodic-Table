//Select all items
const elements = document.querySelectorAll('.element')
const metals = document.querySelectorAll('.metal')
const semiMetals = document.querySelectorAll('.semi-metal')
const noMetals = document.querySelectorAll('.no-metal')
const nobleGases = document.querySelectorAll('.noble')

const metalButton = document.querySelector('#metal-button')
const semiMetalButton = document.querySelector('#semi-metal-button')
const noMetalButton = document.querySelector('#no-metal-button')
const nobleGasButton = document.querySelector('#noble-gas-button')
const artificialButton = document.querySelector('#artificial-button')

const closeInfoButton = document.querySelector('#close-info-button')
const infoContainer = document.querySelector('.info')
const elementName = document.querySelector('.info h2')
const elementType = document.querySelector('#element-type')
const elementColor = document.querySelector('#element-color')
const elementPropieties = document.querySelector('#element-propieties')

//Add listeners
metalButton.addEventListener('click', () => {
    elements.forEach(element => {
        if (element.classList.contains('no-metal') || element.classList.contains('semi-metal') || element.classList.contains('noble') || element.classList.contains('artificial')) {
            element.classList.toggle('selected')
        }
    })
})
semiMetalButton.addEventListener('click', () => {
    elements.forEach(element => {
        if (element.classList.contains('metal') || element.classList.contains('no-metal') || element.classList.contains('noble') || element.classList.contains('artificial')) {
            element.classList.toggle('selected')
        }
    })
})
noMetalButton.addEventListener('click', () => {
    elements.forEach(element => {
        elements.forEach(element => {
            if (element.classList.contains('metal') || element.classList.contains('semi-metal') || element.classList.contains('noble') || element.classList.contains('artificial')) {
                element.classList.toggle('selected')
            }
        })
    })
})
nobleGasButton.addEventListener('click', () => {
    elements.forEach(element => {
        elements.forEach(element => {
            if (element.classList.contains('metal') || element.classList.contains('no-metal') || element.classList.contains('semi-metal') || element.classList.contains('artificial')) {
                element.classList.toggle('selected')
            }
        })
    })
})
artificialButton.addEventListener('click', () => {
    elements.forEach(element => {
        if (element.classList.contains('metal') || element.classList.contains('no-metal') || element.classList.contains('semi-metal') || element.classList.contains('noble')) {
            element.classList.toggle('selected')
        }
    })
})
closeInfoButton.addEventListener('click', () => {
    infoContainer.style.display = 'none'
})
elements.forEach(element => {
    element.addEventListener('click', () => {
        infoContainer.style.display = 'block'
        elementName.textContent = element.textContent.trim().slice(10, 22) //Display the correct namme of selected element
        if (element.classList.contains('metal')) {
            elementType.textContent = 'Metal'
            elementColor.style.backgroundColor = '#dba901'
            elementPropieties.innerHTML = `
            <h2>General Propieties</h2>
            <br>
            <ul>
                <li><p>Cation formation</p></li>
                <li><p>Formation of basic oxides</p></li>
                <li><p>Salt formation</p></li>
            </ul>
            `
        } else if (element.classList.contains('no-metal')) {
            elementType.textContent = 'No Metal'
            elementColor.style.backgroundColor = '#013adf'
        } else if (element.classList.contains('semi-metal')) {
            elementType.textContent = 'Semi Metal'
            element.style.backgroundColor = '#04b45f'
        } else if (element.classList.contains('artificial')) {
            elementType.textContent = 'Artificial'
            elementColor.style.backgroundColor = '#2e2e2e'
        } else {
            elementType.textContent = 'Noble Gas'
            elementColor.style.backgroundColor = '#ff0040'
        } //Display the correct type of selected element
    })
})