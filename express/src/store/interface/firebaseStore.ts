import * as firebaseAuth from 'firebase/auth';
export interface FirebaseStore {
    login(email: string, password: string): Promise<firebaseAuth.UserCredential>
}