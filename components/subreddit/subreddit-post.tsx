import {IPost, IPostType} from "../../types/post";
import {makeStyles, Theme} from "@material-ui/core";
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";
import formatDistance from "date-fns/formatDistance";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ChatIcon from "@material-ui/icons/ChatBubble";
import GiftIcon from "@material-ui/icons/Redeem";
import ShareIcon from "@material-ui/icons/Reply";
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import {cx} from "../../util";

const useStyles = makeStyles((theme: Theme) => {
    return {
        container: {
            width: "100%",
            marginTop: "1rem",
            borderRadius: "0.2rem",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
        },
        left: {
            maxWidth: "fit-content",
            backgroundColor: "rgba(128, 128, 128, 0.1)",
            fontSize: "0.7rem",
            fontWeight: 700,
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
        },
        right: {
            flex: 1,
            padding: "0.5rem",
            paddingBottom: 0,
        },
        arrowIcon: {
            cursor: "pointer",
        },
        arrowUp: {
            marginBottom: "0.1rem",
            "&:hover": {
                backgroundColor: "rgba(128, 128, 128, 0.2)",
                color: "red",
            }
        },
        arrowDown: {
            marginTop: "0.1rem",
            "&:hover": {
                backgroundColor: "rgba(128, 128, 128, 0.2)",
                color: "blue",
            }
        },
        posterInfo: {
            display: "flex",
            flexDirection: "row",
            color: "rgba(128, 128, 128, 1)",
            fontSize: "0.7rem",
            paddingBottom: "0.6rem",
            verticalAlign: "middle",
        },

        careers: {
            backgroundColor: "rgba(0, 128, 0, 0.3)",
        },
        discussion: {
            backgroundColor: "rgba(0, 128, 0, 0.6)",
        },
        news: {
            backgroundColor: "rgba(0, 200, 0, 0.6)",
        },
        needsHelp: {
            backgroundColor: "rgba(200, 0, 0, 0.9)",
            color: "white",
        },
        resource: {
            backgroundColor: "rgba(200, 160, 0, 0.6)",
        },
        tag: {
            padding: "0.2rem",
            paddingLeft: "0.4rem",
            paddingRight: "0.4rem",
            borderRadius: "1rem",
            fontSize: "0.7rem",
            cursor: "pointer",
            "&:hover": {
                filter: "brightness(1.1)",
            }
        },
        titleContainer: {
            display: "flex-inline",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            verticalAlign: "middle",
        },
        title: {
            paddingLeft: "0.5rem",
            fontSize: "1rem",
            fontWeight: 600,
        },
        postText: {
            width: "100%",
            color: "black",
            fontSize: "0.9rem",
            fontWeight: 400,
        },
        actions: {
            width: "100%",
            maxHeight: "fit-content",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            background: "transparent",
            margin: 0,
            paddingBottom: "0.5rem",
        },
        action: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            fontSize: "0.8rem",
            color: "rgba(128, 128, 128, 1)",
            cursor: "pointer",
            border: 0,
            outline: 0,
            background: "transparent",
            verticalAlign: "middle",
            marginRight: "1rem",
        },
        actionIcon: {
            fontSize: "1rem",
            marginRight: "0.3rem",
        },
        shareIcon: {
            transform: "scaleX(-1)",
        }

    }
})

export interface ISubredditPostProps {
    post: IPost;
}

export const SubredditPost = (props: ISubredditPostProps) => {
    const classes = useStyles();
    const datestr = formatDistance(
        props.post.postedOn,
        new Date(),
        { addSuffix: true }
    );

    let jsxTag;
    if(props.post.type !== IPostType.NONE) {
        const classMap = {
            [IPostType.NEEDSHELP]: classes.needsHelp,
            [IPostType.DISCUSSION]: classes.discussion,
            [IPostType.RESOURCE]: classes.resource,
            [IPostType.CAREERS]: classes.careers,
            [IPostType.NEWS]: classes.news,
        }
        jsxTag = (
            <span className={cx(classes.tag, classMap[props.post.type])}>
                {props.post.type.toString()}
            </span>
        )
    }

    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <ArrowUpward className={cx(classes.arrowIcon, classes.arrowUp)} />
                {props.post.votes}
                <ArrowDownward className={cx(classes.arrowIcon, classes.arrowDown)} />
            </div>
            <div className={classes.right}>
                <span className={classes.posterInfo}>
                    Posted by {props.post.postedBy} {datestr}
                </span>
                <div className={classes.titleContainer}>
                    {jsxTag}
                    <span className={classes.title}>
                        {props.post.title}
                    </span>
                </div>
                <p className={classes.postText}>
                    {props.post.text}
                </p>
                <p className={classes.actions}>
                    <button className={classes.action}>
                        <ChatIcon className={classes.actionIcon}/>
                        {props.post.comments} comments
                    </button>
                    <button className={classes.action}>
                        <GiftIcon className={classes.actionIcon}/>
                        Award
                    </button>
                    <button className={classes.action}>
                        <ShareIcon className={cx(classes.actionIcon, classes.shareIcon)}/>
                        Share
                    </button>
                    <button className={classes.action}>
                        <BookmarkIcon className={classes.actionIcon}/>
                        Add
                    </button>
                    <button className={classes.action}>
                        <MoreHorizIcon className={classes.actionIcon}/>
                    </button>
                </p>
            </div>

        </div>
    )
}
