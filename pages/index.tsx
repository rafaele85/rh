import {makeStyles, Theme} from "@material-ui/core";
import {signIn, signOut, useSession} from "next-auth/client";
import {Nav} from "../components/nav";
import {Layout} from "../components/layout";

const useStyles = makeStyles((theme: Theme) => {
    return {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        },
    }
});

export default function Home() {
    const classes = useStyles();
    return (
        <Layout>
            reddit content
        </Layout>
    );
}
