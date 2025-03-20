import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export interface Account {
    account_id: string;
    account_username: string;
    account_password: string;
    account_status: string;
    createdAt:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
    updatedAt:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
}
