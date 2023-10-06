import { Typography } from "@mui/material";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    let errorMessage: string;
    if (isRouteErrorResponse(error)) {
        errorMessage = error.error?.message || error.statusText;
    }
    else if (error instanceof Error) {
        errorMessage = error.message;
    }
    else if (typeof error === 'string') {
        errorMessage = error;
    }
    else {
        errorMessage = 'Unknown Error';
    }
    return (
        <>
        <Typography>
            Error:
        </Typography>
        <Typography>
            {errorMessage}
        </Typography>
        </>
    );
}

export default ErrorPage;
