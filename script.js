let image = document.getElementById("presentation-image");
image.addEventListener("mouseover", function() {
    image.style.border = "10px solid";
});
image.addEventListener("mouseout", function(){
    image.style.border ="none";
});
function validerformulaire() {
    const form =document.forms.contactForm; 

    if(form.prenom.value === "") {
        alert("veuillez entrez votre prénom");
        form.prenom.focus();
        return false;
    }
    if (form.nom.value === "") {
        alert( "veuillez entrer votre nom");
        form.nom.focus();
        return false;
    }
    if (form.projet.value === "") {
        alert( "veuillez décrire votre projet");
        form.projet.focus();
        return false;
    }
    if( form.message.value === "") {
        alert("veuillez écrire un message");
        form.message.focus();
        return false;
 }

        }
    

