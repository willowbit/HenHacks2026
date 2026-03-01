document.getElementById("idform").addEventListener("submit", function(e) {
    e.preventDefault();
    const file = document.getElementById("idpic").files[0];

    const reader = new FileReader();
    reader.onload = function(e) {
        localStorage.setItem("uploadedId", e.target.result);
        window.location.href = "displayId.html";
        b = reader.readAsArrayBuffer()
        console.log(b)
    };
    reader.readAsDataURL(file)
})