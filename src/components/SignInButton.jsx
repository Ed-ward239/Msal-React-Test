import Button from '@mui/material/Button';
import { useMsal } from '@azure/msal-react';


export const SignInButton = () => {
    const { instance } = useMsal();

    const handleSingIn = () => {
        instance.loginRedirect({
            scopes: ['user.read']
        });
    }
    return (
        <Button color="inherit" onClick={handleSingIn}>Sign in</Button>
    )
};