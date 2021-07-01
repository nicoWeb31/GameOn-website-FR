# Projet GameOn
1. Forkez ce repo ;
2. Il est conseillé d'utiliser VisualStudio Code et vous pouvez utiliser Docker, mais ce n'est pas obligatoire ;
3. Il n'y a aucune dépendance ;
4. Vous ne devez utiliser que du CSS personnalisé et du JavaScript pur, sans jQuery, Bootstrap ou autre librairie.

Ton travail consiste à ajouter le code JavaScript manquant pour que le formulaire soit pleinement fonctionnel. Pour t’aider à démarrer, j'ai demandé à Jason d'ajouter les issues sur le repo GitHub qui décrivent ce qu'il reste à faire. 

Nous avons reçu quelques commentaires de la part de l’équipe de QA récemment, donc lorsque tu soumets ton code, assure-toi de : 

    travailler sur un repo GitHub forké ;
    utiliser des fichiers séparés pour le HTML, le CSS et le JavaScript ;
    toujours commenter ton code (décrire chaque fonction et chaque classe, ainsi que les parties du code qui nécessitent plus de détails) ;
    tester manuellement les fonctionnalités, les entrées de formulaire et l'affichage responsive.

Quand tu auras terminé, on fera une révision du code tous les deux et on vérifiera qu’il est prêt à être mis en production. 

Merci beaucoup, 

Erika


    "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    "Vous devez choisir une option."
    "Vous devez vérifier que vous acceptez les termes et conditions."
    "Vous devez entrer votre date de naissance."



(1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.
(2) Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :

    Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
    Les données doivent être saisies correctement :
    (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
    (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
    (3) L'adresse électronique est valide.
    (4) Pour le nombre de concours, une valeur numérique est saisie.
    (5) Un bouton radio est sélectionné.
    (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
    Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.
