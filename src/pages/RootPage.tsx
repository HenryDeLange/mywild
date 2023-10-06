import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

function RootPage() {

    return (
        <>
            <Typography>
                menu:
            </Typography>
            <Outlet />
        </>
    );
}

export default RootPage;
