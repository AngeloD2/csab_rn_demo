import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { Barangay } from './barangay';

export interface City {
    city_id: string;
    city_name: string;
    barangays?: string[];
    createdAt?:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
    updatedAt?:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
}
