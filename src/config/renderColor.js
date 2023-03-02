export default function RenderColor(description) {
    if(description === 'Deu empate!') {
        return 'white'
    } else if (description === 'Você perdeu!') {
        return 'red'
    } else if (description === 'Você ganhou!') {
        return 'green'
    }
}