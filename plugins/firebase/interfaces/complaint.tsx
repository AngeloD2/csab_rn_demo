import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export interface Complaint {
    user_id: string;
    barangay_id: string;
    complaint_type: string;
    complaint_date: string;
    complaint_city: string;
    complaint_title: string;
    complaint_body: string;
    createdAt:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
    updatedAt:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
}
