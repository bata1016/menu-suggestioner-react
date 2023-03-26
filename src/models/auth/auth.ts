import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User } from 'firebase/auth'
import { FirebaseError } from '@firebase/util'

class AuthResponse {
  User: User | null
  Error: {
    errorCode: any
    errorMessage: string
  }
  constructor(user: User | null, errorCode: string, errorMessage: string) {
    this.User = user
    this.Error = { errorCode: errorCode, errorMessage: errorMessage};
  }
}

const login = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const auth = getAuth()
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return new AuthResponse(userCredential.user, '', '');
  } catch (error: unknown) {
    const authResponse = new AuthResponse(null, 'FailToLogin', '500')
    if (error instanceof FirebaseError) {
    }
    console.log(error);
    return authResponse
  }
};

const signin = async(email: string, password: string) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    return new AuthResponse(userCredential.user, '', '');
  })
  .catch((error) => {
    const authResponse = new AuthResponse(null, 'FailToSignin', '500')
    if (error instanceof FirebaseError) {
      authResponse.Error.errorCode = error.code;
      authResponse.Error.errorMessage = error.message;
    }
    console.log(error);
    return authResponse
  });
}

const logout = async() => {
  const auth = getAuth();
  signOut(auth).then(() => {
    console.log('success Logout')
    // Sign-out successful.
  }).catch((error) => {
    const authResponse = new AuthResponse(null, 'FailToLogout', '500')
    if (error instanceof FirebaseError) {
      authResponse.Error.errorCode = error.code;
      authResponse.Error.errorMessage = error.message;
    }
    console.log(error);
    return authResponse
  });
}

export { signin, login, logout };