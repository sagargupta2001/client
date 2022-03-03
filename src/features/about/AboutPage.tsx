import {Button, ButtonGroup, Container, Typography} from "@mui/material";
import agent from "../../App/api/agent";

export default function AboutPage() {
    return (
        <Container>
            <Typography gutterBottom variant='h2'>Errors for testing purpose</Typography>
            <ButtonGroup fullWidth>
                <Button variant='contained' onClick={() => agent.TestErrors.get400Error()}>Test 400 Error</Button>
                <Button variant='contained' onClick={() => agent.TestErrors.get401Error()}>Test 401 Error</Button>
                <Button variant='contained' onClick={() => agent.TestErrors.get404Error()}>Test 404 Error</Button>
                <Button variant='contained' onClick={() => agent.TestErrors.get500Error()}>Test 500 Error</Button>
                <Button variant='contained' onClick={() => agent.TestErrors.getValidationError()}>Test Validation Error</Button>
            </ButtonGroup>
        </Container>
    )
}