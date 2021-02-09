# Twitter Clone

Twitter Clone has a cloned homepage of popular social network Twitter.  
You can post tweet or an image or both. It uses firebase realtime database hence all the posts are updated as they are posted.

## Configuration



## Usage
You can clone this repo and add create a js file inside src directory with the name "firebase.js".  

Add your firebase configuration inside newly created "firebase.js"

```python
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCw-li0IscS2rJr68dSjoJL3KM3eFq5PfE",
  authDomain: "twitter-clone-1faac.firebaseapp.com",
  databaseURL: "https://twitter-clone-1faac.firebaseio.com",
  projectId: "twitter-clone-1faac",
  storageBucket: "twitter-clone-1faac.appspot.com",
  messagingSenderId: "316208638057",
  appId: "1:316208638057:web:75a37bf24fab32ff145af8",
  measurementId: "G-HGFP2LDXP9",
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