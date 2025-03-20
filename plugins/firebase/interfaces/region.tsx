import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { Province } from './province';

export interface Region {
    region_id: string;
    region_name: string;
    provinces?: Province[];
    createdAt?:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
    updatedAt?:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
}
