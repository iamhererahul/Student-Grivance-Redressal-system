document.addEventListener("DOMContentLoaded", function () {
    const changeBackgroundColorButton = document.getElementById("changeBackgroundColorButton");
    const body = document.body;

    changeBackgroundColorButton.addEventListener("click", function () {
        const randomColor = getRandomColor();
        body.style.backgroundColor = randomColor;
    });

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
