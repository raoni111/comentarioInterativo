import { Database, ref, set } from "firebase/database";

export default async function setAccountInformation(
    userId: string,
    db: Database,
    atr: string,
    info: string,
  ): Promise<void> {
    const _ref = ref(db, `users/${userId}/${atr}`);
    await set(_ref, info);
}