import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export interface Barangay {
    barangay_id: string;
    barangay_name: string;
    createdAt?:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
    updatedAt?:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
}
