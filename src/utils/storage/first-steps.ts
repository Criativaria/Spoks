import { useStorageContext } from "../../context/storage/storage-context";

const FIRST_STEPS_KEY = "FIRST_STEPS"

export function useFirstAccess() {
    const storage = useStorageContext();

    async function isFirstAccess() {

        try {
            const isFirstAccess = await storage.getItem(FIRST_STEPS_KEY);

            if (!isFirstAccess) {
                return false;
            }
            return true;

        } catch (error) {
            console.log("deu erro no isFirstAccess" + error);
            return true;
        }
    }

    async function addFirstAccess() {

        try {
            await storage.setItem(FIRST_STEPS_KEY, "true");

        } catch (error) {
            console.log("deu erro no getFirstSteps" + error);
        }
    }

    async function deleteFirstAccess() {
        try {
            await storage.setItem(FIRST_STEPS_KEY, "");

        } catch (error) {
            console.log("deu erro no deleteFirstSteps" + error);
        }

    }


    return { isFirstAccess, addFirstAccess, deleteFirstAccess };
}