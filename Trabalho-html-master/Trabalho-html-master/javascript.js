function alterarImagem(){
    document.getElementById("imagem1").src = "https://s2.glbimg.com/fEJDafz4_aXcRPVJNmBSuRiR1-I=/e.glbimg.com/og/ed/f/original/2021/10/01/jin.jpg";
    document.getElementById("imagem2").src = "https://i.pinimg.com/originals/14/19/3c/14193c705151d6ebec4eda8a1808e901.jpg";
    document.getElementById("imagem3").src = "https://images.moviefit.me/p/o/142274-kim-nam-joon.jpg";
    document.getElementById("imagem4").src = "https://www.somagnews.com/wp-content/uploads/2020/06/EPI25FzW4AYV7jk-e1591395607246.jpg";
    document.getElementById("imagem5").src = "https://static.toiimg.com/photo/msid-79737451/79737451.jpg?314185";
    document.getElementById("imagem6").src = "https://i.pinimg.com/originals/7f/34/37/7f3437f907f9603899b192a6e1a42ca2.jpg";
    document.getElementById("imagem7").src = "https://i.pinimg.com/originals/8e/9b/28/8e9b2820c81a46327ecc792ae1ffa90c.jpg";
}
function alterarVideos(){

    document.getElementById("video1").src="./video1.mp4";
    document.getElementById("video2").src="./video2.mp4";
    document.getElementById("video3").src="./video3.mp4";
    document.getElementById("video4").src="./video4.mp4";
}
function register(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmPassword").value;
    alert(email)

    if (password == confirmpassword){
        localStorage.setItem("conta", email + "|" + password);
    }
    else{
        alert("A password não é igual");
    }
    
}
function login(){
    window.location.replace("login.html");

}
function loginFunction(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
}

