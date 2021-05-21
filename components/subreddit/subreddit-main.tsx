import {makeStyles, Theme} from "@material-ui/core";
import {CreatePostButton} from "./create-post-button";
import {About} from "./about";
import {PostByType} from "./post-by-type";
import {Rules} from "./rules";
import {SubredditPost} from "./subreddit-post";
import {mockPosts} from "../../types/post";

const useStyles = makeStyles((theme: Theme) => {
    return {
        container: {
            flex: 1,
            minWidth: "30.5rem",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(209, 213, 219, 1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "1rem",
        },
        centered: {
            flex: 1,
            width: "100%",
            minWidth: "30.5rem",
            maxWidth: "67.5rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            paddingLeft: 0,
            paddingRight: 0,
            [theme.breakpoints.up("sm")]: {
                paddingLeft: "2rem",
                paddingRight: "2rem",
            },
        },
        middle: {
            flex: 1,
            minWidth: "30.5rem",
            maxWidth: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        right: {
            marginLeft: "2rem",
            flex: 1,
            width: "21.5rem",
            minWidth: "21.5rem",
            maxWidth: "21.5rem",
            display: "none",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            [theme.breakpoints.up("md")]: {
                display: "flex",
            }
        },

    }
}, {name: "subreddit-main"});

export interface ISubredditMainProps {
    name: string;
}

export const SubredditMain = (props: ISubredditMainProps) => {
    const classes = useStyles();

    const jsxPosts = mockPosts.map(p => (
        <SubredditPost key={p.id} post={p} />
    ))

    return (
        <div className={classes.container}>
            <div className={classes.centered}>
                <div className={classes.middle}>
                    <CreatePostButton />
                    {jsxPosts}
                </div>
                <div className={classes.right}>
                    <About />
                    <PostByType />
                    <Rules name={props.name}/>
                </div>
            </div>
        </div>
    );
};
