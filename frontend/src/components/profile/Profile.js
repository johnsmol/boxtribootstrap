import React, {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import "./Profile.css";

const Profile = () => {
    const {user, isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);

    useEffect(() => {
        const getUserMetadata = async () => {
            const domain = "dev-6xmqy5r4.us.auth0.com";

            try {
                const accessToken = await getAccessTokenSilently({
                    audience: `https://${domain}/api/v2/`,
                    scope: "read:current_user",
                });

                const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

                const metadataResponse = await fetch(userDetailsByIdUrl, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                const {user_metadata} = await metadataResponse.json();

                setUserMetadata(user_metadata);
            } catch (e) {
                console.log("error: " + e.message);
            }
        };

        if (!isLoading) {
            getUserMetadata();
        }
    }, [getAccessTokenSilently, user?.sub, isLoading]);

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div className="Profile">
                <img src={user.picture} alt={user.name}/>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
                <h5>User Metadata</h5>
                {userMetadata ? (
                    <pre>
						<p>{JSON.stringify(userMetadata, null, 2)}</p>
					</pre>
                ) : (
                    "No user metadata defined"
                )}
            </div>
        )
    );
};

export default Profile;
