import {
    initializeApp
} from 'firebase/app';
import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    addDoc
} from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLrdKnDIh89S656dx04_L6Ly1pLLVkd4g",
    authDomain: "coder-agendas.firebaseapp.com",
    projectId: "coder-agendas",
    storageBucket: "coder-agendas.appspot.com",
    messagingSenderId: "452732565435",
    appId: "1:452732565435:web:e05da21748cdd80837b69e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const productsService = {
    getProducts() {
        return getDocs(collection(db, 'items'))
            .then(documents => {
                const products = []
                documents.forEach(item => products.push({
                    id: item.id,
                    ...item.data()
                }))
                return products
            })
    },

    getProductById(id) {
        if (id) {
            return getDoc(doc(db, 'items', id))
                .then(document => {
                    if (document.exists()) {
                        return {
                            id: document.id,
                            ...document.data()
                        }
                    } else {
                        alert("El producto con id " + id + " no existe.")
                    }
                })
        }
    }
}

export const orderServices = {
    async saveOrder(order) {
        try {
            const docRef = await addDoc(collection(db, "orders"),
                order
            );
            console.log("Document written with ID: ", docRef.id);
            return 
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}


/*

const querySnapshot = await getDocs(collection(db, "orders"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
*/