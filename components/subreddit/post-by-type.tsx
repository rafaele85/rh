import {RightBox} from "./right-box";
import {makeStyles, Theme} from "@material-ui/core";
import CakeIcon from "@material-ui/icons/Cake";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import {cx} from "../../util";


const useStyles = makeStyles((theme: Theme) => {
    return {
        filters: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
        },
        button: {
            border: 0,
            outline: 0,
            padding: "0.7rem",
            paddingTop: "0.4rem",
            paddingBottom: "0.4rem",
            marginBottom: "0.5rem",
            borderRadius: "1rem",
            color: "black",
            fontWeight: 600,
            cursor: "pointer",
            "&:hover": {
               filter: "brightness(1.05)"
            },
        },
        blueButton: {
            backgroundColor: "lightblue",
        },
        yellowButton: {
            backgroundColor: "yellow",
        },
        seeMoreContainer: {

        },
        seeMoreButton: {
            background: "transparent",
            "&:hover": {
                backgroundColor: "lightgray",
            },
        }

    }
})

export const PostByType = () => {
    const classes = useStyles();
    return (
        <RightBox title={"View by Post Type"} >
            <div className={classes.filters}>
                <button className={ cx(classes.button, classes.blueButton) }>
                    Featured
                </button>
                <button className={ cx(classes.button, classes.blueButton) }>
                    Great Answer
                </button>
                <button className={ cx(classes.button, classes.yellowButton)}>
                    Project Ideas
                </button>
            </div>
            <div className={classes.seeMoreContainer}>
                <button className={cx(classes.button, classes.seeMoreButton)}>
                    See more
                </button>
            </div>
        </RightBox>
    )
}
