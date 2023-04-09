import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";
import { Container, Box, ChakraProvider } from "@chakra-ui/react";

const Home = () => {
    const session = useSession();
    const supabase = useSupabaseClient();
    if (session) {
        return window.location.replace("/app");
    }
    return (
        <ChakraProvider>
            <Container centerContent p={3}>
                <Box padding="4" color="black" w={"lg"}>
                    <p>hello world, this is menjasa</p>
                </Box>
            </Container>
        </ChakraProvider>
    );
};

export default Home;
