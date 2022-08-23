var drumBtns = document.querySelectorAll(".drum");

drumBtns.forEach(element => { element.addEventListener("click", function () {
    alert("i got clicked!");    
});    
});
