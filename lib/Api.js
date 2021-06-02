import { loadFirebase } from './firebaseConfig';

const loadDb = async () => {
    let firebase = await loadFirebase();
    return firebase.firestore();
}

export const getImages = async () => {
    try{
        const db = await loadDb();
        let response = [];
        if (db) {
            var docRef = db.collection("gallery");
            let snapshot = await docRef.get();
            snapshot.forEach((doc) => {
                response.push(doc.data());
            })
        }
        return response;
    }catch(error){
        console.log("Deu error", error);
    }
}