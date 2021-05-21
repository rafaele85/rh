import {ISubredditLink} from "../types/subreddit-link";
import {makeStyles, Theme} from "@material-ui/core";
import Link from "next/link";
import Select, {ActionMeta} from "react-select";
import {IValueLabel} from "../types/value-label";
import {signIn, signOut, useSession} from "next-auth/client";
import {useEffect, useState} from "react";
import {Subreddit} from "@prisma/client/index";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme: Theme) => {
    return {
        nav: {
            width: "100%",
            position: "fixed",
            top: 0,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            backgroundColor: "rgba(75, 85, 99, 1)",
            zIndex: 100,
        },
        container: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            //justifyContent: "flex-start",
        },
        ball: {
            width: "3rem",
            height: "3rem",
            borderRadius: "3rem",
            marginLeft: "1rem",
            marginRight: "1rem",
            backgroundColor: "rgba(252, 165, 165, 1)",
        },
        adaptiveHide: {
            display: "none",
            [theme.breakpoints.up("md")]: {
                display: "block",
            },

        },
        hoverIndigo: {
            "&:hover": {
                color: "rgba(199, 210, 254, 1)",    //indigo-200
            }
        },

        link: {
            color: "white",
            fontSize: "1.5rem",   //text-2xl
            lineHeight: "2rem",
            fontWeight: 700,
        },

        selectContainer: {
            width: "100%",
            marginRight: "1rem",
            [theme.breakpoints.up("md")]: {
                width: "33.333333%",
                marginRight: 0,
            }
        },
        select: {
            width: "100%",
        },
        welcome: {
            color: "white",
            fontWeight: 700,
            fontSize: "1.25rem",  //text-xl
            lineHeight: "1.75rem",
            whiteSpace: "nowrap",
        },
        signContainer: {
            color: "white",
            fontWeight: 700,
            marginRight: "1rem",
        },
        button: {
            color: "white",
            fontWeight: 700,
            marginRight: "1rem",
            border: 0,
            outline: 0,
            background: "transparent",
            cursor: "pointer",
            whiteSpace: "nowrap",
        }
    }
});


const links: ISubredditLink[] = [
    {
        href: "https://github.com/vercel/next.js", label: "Github"
    },
    {
        href: "https://nextjs.org/docs", label: "DOcs",
    }
];

export const Nav = () => {
    const [session, loading] = useSession();

    const [subreddits, setSubreddits] = useState<IValueLabel[]>([]);

    const fetchData = async () => {
        try {
            const res = await fetch("/api/subreddits/all-subredits");
            const sr = await res.json() as Subreddit[];
            const arr: IValueLabel[] = [];
            for(let s of sr) {
                arr.push({value: ""+s.id, label: s.name});
            }
            setSubreddits(arr);
        } catch(err) {
            console.error(err);
        }
    };

    useEffect(() => {
        void fetchData();
    }, []);

    const handleSignout = async () => {
        await signOut();
    };

    const handleSignin = async () => {
        await signIn();
    };

    const router = useRouter();
    const handleSelect = (sr: IValueLabel|null, _actionMeta: ActionMeta<IValueLabel>) => {
        if(sr) {
            void router.push(`/subreddits/${sr.value}`);
        }
    };

    const classes = useStyles();

    let jsxSign;
    if(session) {
        jsxSign = (
            <button
                className={`${classes.button} ${classes.hoverIndigo}`}
                onClick={handleSignout}
            >
                Sign out
            </button>
        );
    } else {
        jsxSign = (
            <button
                className={`${classes.button} ${classes.hoverIndigo}`}
                onClick={handleSignin}
            >
                Sign in
            </button>
        );
    }

    return (
        <nav className={classes.nav}>
            <div className={classes.container}>
                <Link href={"/"}>
                    <a className={classes.link} href={"#"}>
                        <div className={classes.ball} />
                    </a>
                </Link>
                <Link href={"/"}>
                    <a className={`${classes.link} ${classes.adaptiveHide} ${classes.hoverIndigo}`} href={"#"}>
                        reddit
                    </a>
                </Link>
            </div>

            <div className={classes.selectContainer}>
                <Select
                    className={classes.select}
                    options={subreddits}
                    instanceId={"dfdf"}
                    onChange = {handleSelect}
                />
            </div>

            <h3 className={`${classes.welcome} ${classes.adaptiveHide}`}>
                Welcome {loading ? "" : session?.user?.name }
            </h3>

            <div className={classes.signContainer}>
                {jsxSign}
            </div>
        </nav>
    )
}
