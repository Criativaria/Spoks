import AsyncStorage from "@react-native-async-storage/async-storage";
import { IStorage } from "../adapter";
import { useUser } from "@clerk/clerk-expo";


export function useClerkStorageAdapter(): IStorage {

    const user = useUser().user!;

    const getItem = async (key: string): Promise<string | null> => {
        return user.unsafeMetadata[key] as string;
    }

    const setItem = async (key: string, value: string): Promise<void> => {
        await user.update({
            unsafeMetadata: {
                [key]: value
            }
        })
    }

    return { getItem, setItem }
}