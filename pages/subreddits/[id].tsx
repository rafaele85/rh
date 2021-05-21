import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Subreddit} from "@prisma/client";
//import Link from "next/link";
import {Layout} from "../../components/layout";
import {makeStyles, Theme} from "@material-ui/core";
import {SubredditMain} from "../../components/subreddit/subreddit-main";

const useStyles = makeStyles((theme: Theme) => {
    return {
        container: {
            display: "flex",
            flexDirection: "column",
        },
        greenBar: {
            height: "4rem",
            backgroundColor: "rgba(52, 211, 153, 1)",
        },
        whiteBar: {
            height: "4.5rem",
            backgroundColor: "white",
            display: "flex",
            alignItems: "flex-start",
        },
        adaptiveContainerWidth: {
            width: "100%",   //container
            [theme.breakpoints.up("sm")]: {
                maxWidth: "640px",
            },
            [theme.breakpoints.up("md")]: {
                maxWidth: "768px",
            },
            [theme.breakpoints.up("lg")]: {
                maxWidth: "1024px",
            },
            [theme.breakpoints.up("xl")]: {
                maxWidth: "1280px",
            },
        },
        greenBallContainer: {
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "3rem",
            paddingRight: "3rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
        },

        greenBall: {
            width: "4rem",
            height: "4rem",
            position: "absolute",
            //bottom: "1.5rem",
            top: "-1.5rem",
            borderRadius: "50%",
            backgroundColor: "rgba(52, 211, 153, 1)",
            border: "1px solid white",
        },

        titleContainer: {
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },

        subredditName: {
            margin: 0,
            padding: 0,
            marginLeft: "5rem",
            fontSize: "1.5rem",  //2xl
            lineHeight: "2rem",
            color: "rgba(55, 65, 81, 1)", //gray-700
            fontWeight: 700,
        },

        joinedButton: {
            marginLeft: "1rem",
            fontsize: "0.875rem",  //text-sm
            lineHeight: "1.25rem",
            color: "rgba(52, 211, 153, 1)", //green-400
            fontWeight: 600,
            border: "1px solid rgba(52, 211, 153, 1)", //green-400
            cursor: "pointer",
            paddingTop: "0.25rem",
            paddingBottom: "0.25rem",
        },

        subredditid: {
            margin: 0,
            padding: 0,
            marginLeft: "5rem",
            fontsize: "0.875rem",  //text-sm
            lineHeight: "1.25rem",
            color: "rgba(75, 85, 99, 1)", //gray-600,
        },
/*
        mainContainer: {
            backgroundColor: "rgba(209, 213, 219, 1)",  //gray-300
            display: "flex",
            flexDirection: "row",
        },
        left: {
            display: "flex",
            marginTop: "auto",
            marginBottom: "auto",
            padding: "1rem",
        },
        createPostContainer: {
            width: "33.33333%",
        },
        createPost: {
            width: "100%",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            backgroundColor: "white",
            borderRadius: "1rem",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",  //shadow-sm
            outline: 0,
            "&:hover": {
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", //shadow-lg
            },
        },
        leftContent: {
            marginLeft: "1rem",
            backgroundColor: "white",
            borderRadius: "1rem",
        },
        aboutLabelContainer: {
            backgroundColor: "rgba(52, 211, 153, 1)",  //green-400
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            borderTopLeftRadius: "0.375rem",  //rounded-t-md
            borderTopRightRadius: "0.375rem",
        },
        aboutLabel: {
            color: "rgba(17, 24, 39, 1)", //gray-900
            fontSize: "0.875rem",   //text-sm
            lineHeight: "1.25rem",
            fontWeight: 700,
        },
        aboutContainer: {
            padding: "0.5rem",
            backgroundColor: "white",
        },
        onlineContainer1: {
            width: "100%",
            marginTop: "0.5rem",
            display: "flex",
            flexDirection: "row",
            fontWeight: 600,
        },
        onlineContainer2: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },
        onlineLabel: {
            fontSize: "0.875rem",   //text-sm
            lineHeight: "1.25rem",
        },
        grayBar: {
            width: "100%",
            backgroundColor: "rgba(209, 213, 219, 1)",
            marginTop: "1rem",
            marginBottom: "1rem",
            height: "1px",
        },
        createdContainer: {
            marginBottom: "1rem",
            fontSize: "1rem",
            lineHeight: "1.5rem",
        },

 */

    }
});

const joined=true;
const members = 5100;
const totalPosts = 203;
const created = new Date();
const about="some text about this reddit";
const dt = "01 jan 2021";

const SubredditPage = () => {
    const router = useRouter();

    const [subreddit, setSubreddit] = useState<Subreddit|undefined>();

    const subredditId = router.query.id;

    const fetchData = async () => {
        try {
            const res = await fetch(`/api/subreddits/${subredditId}`);
            const sr = await res.json() as Subreddit;
            setSubreddit(sr);
        } catch(err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if(subredditId) {
            void fetchData();
        }
    }, [router.query]);

    const handleJoin = () => {

    }

    let jsxMain
    if(subreddit) {
        jsxMain = (
            <SubredditMain name={subreddit?.name}/>
        )
    }

    const classes = useStyles();
    return (
        <Layout>
            <div className={classes.container}>
                <div className={classes.greenBar} />
                <div className={classes.whiteBar}>
                    <div className={`${classes.greenBallContainer} ${classes.adaptiveContainerWidth}`}>
                        <div className={classes.greenBall} />
                        <div className={classes.titleContainer}>
                            <h4 className={classes.subredditName}>
                                {subreddit?.name}
                            </h4>
                            <button
                                className={classes.joinedButton}
                                onClick={handleJoin}
                            >
                                {joined ? "JOINED" : "JOIN"}
                            </button>
                        </div>
                        <p className={classes.subredditid}>
                            r/{subreddit?.name}
                        </p>
                    </div>
                </div>
                {jsxMain}
            </div>
        </Layout>
    );
};

export default SubredditPage;

