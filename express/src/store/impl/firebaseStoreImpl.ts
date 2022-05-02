import {FirebaseStore} from '../interface/firebaseStore';
import {getFirebaseAuth, firebaseApp} from '../../firebase/config';
import * as firebaseAuth from 'firebase/auth';

class FirebaseStoreImpl implements FirebaseStore {
    async login(email: string, password: string): Promise<firebaseAuth.UserCredential> {
        const auth = getFirebaseAuth();
        return await firebaseAuth.signInWithEmailAndPassword(auth, email, password);
    }
}