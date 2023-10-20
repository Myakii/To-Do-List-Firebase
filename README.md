Création d'une Application de Liste de Tâches avec Firebase et ReactJS

Vous êtes chargé de développer une application de gestion de liste de tâches en utilisant ReactJS, Firebase, Firestore et une authentification. L'application doit permettre aux utilisateurs de créer, consulter, modifier et supprimer leurs propres listes de tâches personnelles, tout en assurant que les listes de tâches ne sont accessibles que par leurs propriétaires.

Voici les fonctionnalités clés de l'application :

Authentification :

Utilisez Firebase Authentication pour permettre aux utilisateurs de s'inscrire, de se connecter et de se déconnecter.

Liste de Tâches :

Chaque utilisateur doit avoir sa propre liste de tâches personnelle. Les listes de tâches ne sont pas accessibles par d'autres utilisateurs.
Les tâches doivent avoir les attributs suivants : titre, description, état (en cours ou terminée), date de création.
Affichage des Tâches :

Les tâches doivent être triées en deux catégories : "En cours" et "Terminées". Les tâches en cours doivent être affichées en premier, suivies des tâches terminées.
Les tâches doivent être affichées sous forme de liste avec les détails : titre, description, état et date de création.
Ajout de Tâches :

Les utilisateurs doivent pouvoir ajouter de nouvelles tâches à leur liste en spécifiant le titre, la description et l'état initial (en cours par défaut).
Modification d'État :

Les utilisateurs doivent pouvoir marquer une tâche comme "terminée" ou "en cours" et mettre à jour son état.
Suppression de Tâches :

Les utilisateurs doivent pouvoir supprimer des tâches de leur liste.
Navigation :

Utilisez React Router pour gérer la navigation entre les différentes vues de l'application, notamment une page de connexion, une page de liste de tâches, une page de création de tâches, etc.
Interface Utilisateur (UI) :

Utilisez le framework MUI (Material-UI) pour créer une interface utilisateur agréable et réactive.
Assurez-vous d'installer les dépendances nécessaires en utilisant les commandes suivantes :
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install firebase
npm install react-router
