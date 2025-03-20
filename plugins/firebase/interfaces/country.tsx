import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { Region } from './region';

export interface Country {
    country_id: string;
    country_name: string;
    states?: string[];
    regions?: Region[];
    createdAt?:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
    updatedAt?:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
}
