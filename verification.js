function valider ( )
{
    if ( document.formulaire.Prenom.value == "" )
    {
        alert ( "Veuillez entrer votre prénom !" );
        valid = false;
return valid;
    }
    if ( document.formulaire.Nom.value == "" )
    {
        alert ( "Veuillez entrer votre nom !" );
        valid = false;
return valid;
    }

    if ( document.formulaire.Courriel.value == "" )
    {
        alert ( "Veuillez entrer votre courriel !" );
        valid = false;
return valid;
    }

    if ( document.formulaire.Telephone.value == "" )
    {
        alert ( "Veuillez entrer votre numéro de téléphone !" );
        valid = false;
return valid;
    }
    if ( document.formulaire.Adresse.value == "" )
    {
        alert ( "Veuillez entrer votre adresse !" );
        valid = false;
return valid;
    }
}