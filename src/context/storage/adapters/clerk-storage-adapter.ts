import { IStorage } from "../adapter";
import { useUser } from "@clerk/clerk-expo";
import { useEffect, useRef, useState } from "react";


export function useClerkStorageAdapter(): IStorage {
    const user = useUser().user!;

    const storage = useRef<Record<string, string>>({});

    useEffect(() => {
        storage.current = user.unsafeMetadata as Record<string, string>;
    }, [])

    const syncStorage = async () => {
        await user.update({
            unsafeMetadata: storage.current
        })
    }

    const getItem = async (key: string): Promise<string | null> => {
        return storage.current[key] as string;
    }

    const setItem = async (key: string, value: string) => {
        storage.current[key] = value;
        syncStorage();
    }

    return { getItem, setItem }
}