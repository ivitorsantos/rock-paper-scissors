export default function CheckWinner(player, computer) {
    if(player === computer) {
        return 'Deu empate!'
    } else if (player === 1 & computer === 2) {
        return 'Você perdeu!'
    } else if (player === 1 & computer === 3) {
        return 'Você ganhou!'
    } else if (player === 2 & computer === 1) {
        return 'Você ganhou!'
    } else if (player === 2 & computer === 3) {
        return 'Você perdeu!'
    } else if (player === 3 & computer === 1) {
        return 'Você perdeu!'
    } else if (player === 3 & computer === 2) {
        return 'Você ganhou!'
    }
}