import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { City } from './city';

export interface Province {
    province_id: string;
    province_name: string;
    cities?: City[];
    createdAt?:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
    updatedAt?:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
}
