# App141

Vous trouverez ici, comment créer et installer l'application pour Android & IOS.

## Getting Started

Ces instructions vous fournirons une copie du projet opérationnel sur votre oridinateur local à des fins de
développement et de test.

### Conditions préalables

De quoi avez-vous besoins pour pouvoir développer & builder votre application ?

```
- Une version récente de Nodejs,
- Une version récente d'Apache Cordova,
- Et de Ionic
```

### Installation

Dans un premier temps, il vous faut installer [Nodejs](https://nodejs.org/fr/), ou vérifier avec la commande sur votre terminal

```
node -v
v11.10.1
```

Il vous faudra installer la version la plus récente d'Apache Cordova avec Nodejs

```
sudo npm install -g cordova
```

Ensuite, il vous faudra installer le framework Ionic

```
sudo npm install -g ionic
```

Pour pouvoir tester votre code ainsi qu'utiliser ses paquets, il vous faudra appeler Nodejs (pour les paquets)
et créer les plateformes pour Android & IOS avec Cordova

```
cd App141/
sudo npm install
ionic cordova platform add ios
ionic corodova platform add android
```

## Lancer les tests

Vous pouvez tester votre projet sur votre navigateur

```
ionic serve
```

Ou alors en appelant à un simulateur via Cordova

```
ionic cordova build android
ionic cordova build android
```

## Publié votre application

Pour la publication de votre application, nous vous conseillons de suivre les instructions du site
[Ionic](https://ionicframework.com/docs/v1/guide/publishing.html) tout est détaillé pour la version Android
& IOS. Dans le fichier config.xml, il vous faudra indiqué un id et une version différente en fonction si c'est pour Android ou IOS (à mettre à jour la version dans ce fichier pour chaque
  publication sur chacun des stores)

```
Android: - id: fr.videlio_lab.app
         - version: 1.0.0
IOS : - id: com.videlio-lab.app
      - version: 1.2.3
```

## Auteurs

* **Florian Di-Rosa** - *Initial work* - [Florian](http://10.1.2.120:30000/Florian)


## License

Ce projet est sous licence [Videlio-IEC](https://www.videlio.com/).
