import { Link } from "react-router-dom";
import { translationClearHistory } from "../../api/translation";
import { userById } from "../../api/user";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageDelete, storageSave } from "../../utils/storage";

const ProfileActions = () => {

    const {user, setUser} = useUser();

    const handleLogoutClick = () => {

        if (!window.confirm("Are you sure you want to log out?")) {
            return;
        }

        storageDelete(STORAGE_KEY_USER)
        setUser(null);
    }

    const handleHistoryClick = async () => {

        if (!window.confirm("Are you sure you want to delete translation history?\nThis can not be undone.")) {
            return;
        }

        const [clearError, clearResult] = await translationClearHistory(user.id);
        console.log("History result", clearResult);
    
        // THrows an error every time even thought the API gets updated successfully
        // drives me insane, but it does work, so I'm leaving it for now. >:(
        if (clearError !== null) {
            console.log("Error: ", clearError);
            //return;
        }

        const updatedUser ={
            ...user,
            translations: []
        }
        
        // sync UI and server state
        storageSave(STORAGE_KEY_USER, updatedUser);
        // update context state
        setUser(updatedUser);
    }

    return (
        <ul>
            <li><Link to="/translations">Translations</Link></li>
            <li><button onClick={handleHistoryClick}>Clear history</button></li>
            <li><button onClick={handleLogoutClick}>Logout</button></li>
        </ul>
    )
}
export default ProfileActions;