# Twitter Clone

Twitter Clone has a cloned homepage of popular social network Twitter.  
You can post tweet or an image or both. It uses firebase realtime database hence all the posts are updated as they are posted.

## Configuration
You can clone this repo and add create a js file inside src directory with the name "firebase.js".  

Add your firebase configuration inside newly created "firebase.js"

```python
//You can get all of these credentials after creating a new app in firebase console
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "YOUR API KEY",
  authDomain: "YOUR AUTH DOMAIN",
  databaseURL: "YOUR DATABASE URL",
  projectId: "YOUR PROJECT ID",
  storageBucket: "YOUR STOPRAGE BUCKET",
  messagingSenderId: "YOUR MESSAGE SENDER ID",
  appId: "YOUR APP ID",
  measurementId: "YOUR MEASUREMENT ID",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
```
To start react project
```bash
npm start
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## References
[CleverProgrammers Tutorial](https://www.youtube.com/watch?v=rJjaqSTzOxI)