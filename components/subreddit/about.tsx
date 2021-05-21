import {RightBox} from "./right-box";
import {makeStyles, Theme} from "@material-ui/core";
import CakeIcon from "@material-ui/icons/Cake";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";


const useStyles = makeStyles((theme: Theme) => {
    return {

        description: {

        },
        stats: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",

        },
        stat: {
            minWidth: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
        },
        label: {
            textAlign: "left",
            verticalAlign: "top",
            fontSize: "0.7rem",
        },
        value: {
            textAlign: "left",
            verticalAlign: "top",
            fontWeight: 700,
        },
        hr: {
            width: "100%",
            borderTop: 0,
            borderColor: "rgba(128, 128, 128, 0.2)",
        },
        created: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            fontSize: "0.8rem",
            verticalAlign: "bottom",
        },
        cakeIcon: {
            marginRight: "0.5rem",
        },
        createPostContainer: {
            width: "100%",
            padding: "0.5rem",
        },
        createPostButton: {
            padding: "0.5rem",
            color: "white",
            fontWeight: 700,
            width: "100%",
            backgroundColor: "tomato",
            border: 0,
            outline: 0,
            borderRadius: "1rem",
            cursor: "pointer",
        },
        communityOptionsContainer: {
            width: "100%",
            padding: "0.5rem",
        },
        communityOptionsButton: {
            padding: "0.5rem",
            color: "black",
            fontWeight: 700,
            width: "100%",
            background: "transparent",
            border: 0,
            outline: 0,
            borderRadius: "1rem",
            cursor: "pointer",
            verticalAlign: "middle",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            "&:hover": {
                backgroundColor: "lightgray",
            }
        },
    }
})

export const About = () => {
    const classes = useStyles();
    return (
        <RightBox title={"About Community"} hasMore={true}>
            <p className={classes.description}>
                A community for learning and developing web applications using React by Facebook.
            </p>
            <div className={classes.stats}>
                <div className={classes.stat}>
                        <span className={classes.value}>
                            3.9m
                        </span>
                    <span className={classes.label}>
                            Members
                        </span>
                </div>

                <div className={classes.stat}>
                        <span className={classes.value}>
                            28.9k
                        </span>
                    <span className={classes.label}>
                            Online
                        </span>
                </div>
            </div>

            <hr className={classes.hr} />

            <div className={classes.created}>
                <CakeIcon className={classes.cakeIcon}/>
                Created Nov 4, 2018
            </div>
            <div className={classes.createPostContainer}>
                <button className={classes.createPostButton}>
                    Create Post
                </button>
            </div>

            <hr className={classes.hr} />

            <div className={classes.communityOptionsContainer}>
                <button className={classes.communityOptionsButton}>
                    CommunityOptions
                    <KeyboardArrowDownIcon />
                </button>
            </div>

        </RightBox>
    )
}
