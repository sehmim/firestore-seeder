# Firebase Firestore Seeder

Use this to seed your data programmatically into your firebase collection. 

## Usage
- Clone this repo
- Make config.js file where past your firebaseConfig and export it
  ```
  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "1",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

  module.exports = firebaseConfig 
  ```
- Similarly, make data.js where write your data
    ```
    const users = []
    
    module.exports = users 
    ```
- Lastly, modify COLLECTION_NAME in seed.js file to be your collection name

🤖
