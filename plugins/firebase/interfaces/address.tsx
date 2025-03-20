import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export interface Address {
    user_id: string;
    address_country: string;
    address_region: string;
    address_province: string;
    address_city: string;
    address_barangay: string;
    address_street: string;
    address_zipcode: string;
    createdAt:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
    updatedAt:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
}
