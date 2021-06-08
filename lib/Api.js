import { loadFirebase } from './firebaseConfig';
import 'firebase/firestore';
import 'firebase/storage';

const loadDb = async () => {
    let firebase = await loadFirebase();
    return firebase;
}

export const getImages = async () => {
    try {
        const db = await loadDb().firestore();
        let response = [];
        if (db) {
            var docRef = db.collection("gallery");
            let snapshot = await docRef.get();
            snapshot.forEach((doc) => {
                response.push(doc.data());
            })
        }
        return response;
    } catch (error) {
        console.log("Deu error", error);
    }
}

export const uploadImagesToStorage = async (images, path, name, username, password) => {

    if (await checkUser(username, password)) {

        let donwloadUrls = [];

        for (let i = 0; i < images.length; i++) {
            const db = await loadDb();
            const firebaseRef = db.storage().ref().child(path + images[i].name);
            await firebaseRef.put(images[i]);
            let url = await firebaseRef.getDownloadURL();
            if (url) { donwloadUrls.push(url); }
        }
        await updateGallery(donwloadUrls, name, path);
        alert("Upload concluído!");
    }else{
        alert('Usuário não autorizado');
    }
}

const updateGallery = async (urls, name, path) => {

    const doc = {
        name: name,
        urls: urls
    }

    const firebase = await loadDb();
    const db = firebase.firestore().collection("gallery").doc(path);
    db.set(doc);
    return;
}

const checkUser = async (username, password) => {
    try {
        const firebase = await loadDb();
        const db = firebase.firestore();
        let response = [];
        if (db) {
            var docRef = db.collection("users");
            let snapshot = await docRef.get();
            snapshot.forEach((doc) => {
                response.push(doc.data());
            })
        }
        let permitted = false;
        for(let i = 0; i< response.length; i++){
            if(response[i].username == username && response[i].password == password){
                permitted = true;
                break;
            }
        }
        return permitted;
    } catch (error) {
        console.log("Deu error", error);
    }
}