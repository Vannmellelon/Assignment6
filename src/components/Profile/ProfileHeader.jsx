const ProfileHeader = ({username}) => {
    return (
        <>
            <header id="ProfileHeader">
                <h2>Profile</h2>
            </header>
            <h4>Hello! You are logged in as: {username}</h4>
        </>
    )
}
export default ProfileHeader;