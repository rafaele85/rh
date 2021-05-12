import {Link, makeStyles, Theme} from "@material-ui/core";
import Select from "react-select";
import {signIn, signOut, useSession} from "next-auth/client";
import {useEffect, useState} from "react";
import {Subreddit} from "@prisma/client/index";
import {useRouter} from "next/router";
import {IValueLabel} from "../types/value-label";

const useStyles = makeStyles((theme: Theme) => {
    return {
        nav: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "rgba(75, 85, 99, 1)",
            paddingTop: "1rem",
            paddingBottom: "1rem",
        },
        container: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },
        link1: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },
        ball: {
            width: "3rem",
            height: "3rem",
            borderRadius: "9999px",
            backgroundColor: "#feb2b2",
            marginRight: "1rem",
            marginLeft: "1rem",
        },
        anchor: {
            color: "white",
            fontWeight: 600,
            textDecoration: "none",
            fontSize: "1.5rem",
            lineHeight: "2rem",
            display: "none",
            [theme.breakpoints.up("md")]: {
                display: "block",
            },
            "&:hover": {
                color: "#b2f5ea"
            }
        },
        selectorContainer: {
            width: "33.3333%",
            paddingRight: "24px",
            [theme.breakpoints.up("md")]: {
                paddingRight: "16px",
                width: "33.3333%",
            },
        },
        selector: {
            //width: "100%",
        },
        welcome: {
            color: "white",
            fontWeight: 700,
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
            display: "none",
            [theme.breakpoints.up("md")]: {
                display: "block",
            },
        },
        button: {
            color: "white",
            fontWeight: 700,
            marginRight: "1rem",
            background: "transparent",
            border: 0,
            outline: 0,
            cursor: "pointer",
            whiteSpace: "nowrap",
            "&:hover": {
                color: "indigo"
            }
        }
    }
});

const links = [
    {href: "https://github.com/vercel/next.js", label: "Github"},
    {href: "https://nextjs.org/docs", label: "Docs"},
];


export const Nav = () => {

    const [subreddits, setSubreddits] = useState<Subreddit[]>([]);

    const fetchData = async () => {
        const res = await fetch("/api/subreddit/all-subredits");
        const sr = await res.json();
        console.log("sr===", sr)
        setSubreddits(sr);
    };

    useEffect(() => {
        void fetchData();
    }, []);

    const [session, loading] = useSession();

    const handleSignIn = async () => {
        await signIn();
    };
    const handleSignOut = async () => {
        await signOut();
    };

    const router = useRouter();
    const handleSelect = async (v: IValueLabel|null) => {
        console.log("router.push ", v?.value)
        if(v) {
            await router.push("/subreddits/"+v.value);
        }
    };


    const classes = useStyles();

    const options: IValueLabel[] = subreddits.map( (sr: Subreddit) => ({label: sr["name"], value: sr["id"]}) );

    let jsxLogin;
    if(!session) {
        jsxLogin = (
            <div>
                <button
                    onClick={handleSignIn}
                    className={classes.button}
                >
                    Login
                </button>
            </div>
        );
    } else {
        jsxLogin = (
            <div>
                <button
                    onClick={handleSignOut}
                    className={classes.button}
                >
                    Sign out
                </button>
            </div>
        );
    }

    return (
        <nav className={classes.nav}>
            <div className={classes.container}>
                <Link href={"/"} className={classes.link1}>
                    <div className={classes.ball} />
                    <span className={classes.anchor}>reddit</span>
                </Link>
            </div>
            <div className={classes.selectorContainer}>
                <Select options={options} className={classes.selector} onChange={handleSelect}/>
            </div>

            <h3 className={classes.welcome}>
                Welcome {session?.user?.name}
            </h3>
            {jsxLogin}
        </nav>
    );
};