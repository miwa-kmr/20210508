let button = document.getElementById("button");
let num = document.getElementById("number");

button.addEventListener("click", function () {
    let count = num.value;

    for (i = 1; i <= count; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            document.write("あほわん" + "<br/>");
        } else if (i % 3 === 0) {
            document.write("あほ" + "<br/>");
        } else if (i % 5 === 0) {
            document.write("わんわん" + "<br/>");
        } else {
            document.write(i + "<br/>");
        }
    }
})
