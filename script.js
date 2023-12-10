let scaleZoom = 1
let leftPorition = 0
let topPosition = 0


// Reduzir o zoom
window.addEventListener("contextmenu", function (event) {
    event.preventDefault()

    scaleZoom = scaleZoom > 0.5 ? scaleZoom - 0.5 : 0.5
    navigate()
})

// Aumentar o zoom
window.addEventListener("click", function (event) {
    event.preventDefault()
    
    scaleZoom = scaleZoom < 5 ? scaleZoom + 0.5 : 5
    navigate()
})


// Mover
window.addEventListener('keydown', function (event) {
    event.preventDefault()

    switch (event.key) {
        // Para cima
        case 'ArrowUp':
            topPosition = topPosition < 100 ? topPosition + 10 : 100
            break

        case 'w':
            topPosition = topPosition < 100 ? topPosition + 10 : 100
            break

        // Para baixo
        case 'ArrowDown':
            topPosition = topPosition > -100 ? topPosition - 10 : -100
            break

        case 's':
            topPosition = topPosition > -100 ? topPosition - 10 : -100
            break
            
        // Para esquerda
        case 'ArrowLeft':
            leftPorition = leftPorition < 100 ? leftPorition + 10 : 100
            break

        case 'a':
            leftPorition = leftPorition < 100 ? leftPorition + 10 : 100
            break

        // Para direita
        case 'ArrowRight':
            leftPorition = leftPorition > -100 ? leftPorition - 10 : -100
            break

        case 'd':
            leftPorition = leftPorition > -100 ? leftPorition - 10 : -100
            break

        // Voltar ao padrão
        case 'Escape':
            topPosition = 0
            leftPorition = 0
            scaleZoom = 1


        default:
            break
    }

    navigate()
})

function navigate() {
    document.querySelector('#solar-system').style.cssText = `transform: scale(${scaleZoom}) !important; top: ${topPosition}% !important; left: ${leftPorition}% !important;`
}
