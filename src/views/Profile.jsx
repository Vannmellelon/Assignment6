import { useEffect } from "react";
import { userById } from "../api/user";
import ProfileActions from "../components/Profile/ProfileActions";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { storageSave } from "../utils/storage";
import "./views.css";

const Profile = () => {

    const {user, setUser} = useUser();

    useEffect(() => {

        // Updates local storage with info from API on render
        const findUser = async () => {
            const [error, latestUser] = await userById(user.id);
            if (error === null) {
                storageSave(STORAGE_KEY_USER, latestUser);
                setUser(latestUser);
            }
        }

        //findUser();
    }, []);

    return (
        <>
            <ProfileHeader username={user.username} />
            <ProfileActions />
            <ProfileTranslationHistory translations={user.translations} />
        </>

    )
}
export default withAuth(Profile);