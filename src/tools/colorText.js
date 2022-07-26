export default function randcolor() {
    let rflags = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F');
    let colors = '';
    for (let i = 0; i < 6; i++) {
        let numb = Math.floor(Math.random() * 15);
        colors += rflags[numb];
    }
    return colors;
}
