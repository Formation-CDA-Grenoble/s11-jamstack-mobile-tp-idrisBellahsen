# Travaux pratiques JAMStack mobile

Tu te rappelles de la carte interactive que notre client, la chaîne de restaurants, nous avait demandée? Mais oui, on te le donne en mille: ils veulent la même en application mobile! Bon, l'avantage c'est qu'on va pouvoir réutiliser le même projet DatoCMS. Il n'y a plus qu'à adapter le code en mobile, et on te fait confiance pour faire ça bien. 👍

## 1. Verifier le projet DatoCMS

Tu peux réutiliser le projet DatoCMS créé lors du dernier TP. Si tu avais rencontré des difficultés, n'hésite pas à te référer à la solution de celui-ci.

## 2. Configuration de l'application Ionic

Trouvez la clé d'API (en lecture seule) de votre projet et enregistrez-la dans le fichier **src/environments/environment.ts** au format suivant:

```
export const environment = {
  production: false
  DATOCMS_API_TOKEN=<votre clé d'API>
};
```

La clé d'API doit s'afficher correctement dans le serveur de développement.

## 3. Requête GraphQL permettant de récupérer tous les restaurants

Dans DatoCMS, à l'aide de l'explorateur d'API, écrivez la requête GraphQL qui vous permet de récupérer tous les restaurants et leurs données. Testez cette requête à l'aide de Postman:

- endpoint: `https://graphql.datocms.com/`
- méthode: **POST**
- body: `{ query: <Votre requête GraphQL> }`
- headers: `{ Authorization: "Bearer <votre clé d'API>" }`

## 4. Afficher la liste des restaurants dans l'application Ionic

Codez un composant qui récupère la liste de tous les restaurants à l'aide du module HttpClient, et de la requête écrite à l'étape précédente.

## 5. Afficher les restaurants sur une carte

Le composant codé à l'étape précédente doit afficher une carte interactive sur laquelle apparaissent tous les restaurants, au lieu d'une simple liste. Vous pouvez pour ce faire utiliser [Leaflet](https://leafletjs.com/) (déjà inclus dans ce dépôt), en vous inspirant de ce [tutoriel](https://alligator.io/angular/angular-and-leaflet/).

## BONUS 1

Ajoutez un routeur dans l'application, avec une page pour chaque restaurant, qui permet de présenter l'établissement. Chaque panneau ouvert au clic sur une épingle dans la carte doit contenir un lien qui amène à la page du restaurant correspondant.

## BONUS 2

Ecrire la requête vers DatoCMS dans un service, et l'inclure dans votre composant par injection de dépendance. Lorsqu'on change de page, le service ne doit pas retourner faire la requête, mais passer les données qu'il possède déjà à la nouvelle page.
