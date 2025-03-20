import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export interface Role {
    role_id: string;
    role_name: string;
    role_perm1: string;
    role_perm2?: string;
    role_perm3?: string;
    role_perm4?: string;
    role_perm5?: string;
    createdAt:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
    updatedAt:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
}
