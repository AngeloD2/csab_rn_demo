import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export interface User {
    account_id: string;
    user_id: string;
    role_id: string;
    address_id: string;
    user_firstname: string;
    user_lastname: string;
    user_email: string;
    user_phone: number;
    user_status: number;
    createdAt:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
    updatedAt:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
}
