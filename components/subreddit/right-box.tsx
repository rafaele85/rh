import {IconButton, makeStyles, Theme} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CakeIcon from "@material-ui/icons/Cake";

const useStyles = makeStyles((theme: Theme) => {
    return {
        container: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            border: "1px solid rgba(128, 128, 128, 0.7)",
            borderRadius: "0.2rem",
            backgroundColor: "white",
            marginBottom: "1rem",
        },
        header: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.7rem",
            fontWeight: 700,
            backgroundColor: "rgba(128, 128, 128, 1)",
            borderTopLeftRadius: "0.2rem",
            borderTopRightRadius: "0.2rem",
            color: "white"
        },
        moreIconContainer: {
            padding: "0.1rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            "&:hover": {
                //filter: "brightness(80%)"
                //backgroundBlendMode: "darken",
                boxShadow: "inset 0px 0px 400px 110px rgba(0, 0, 0, .1)",
            },
        },
        body: {
            width: "100%",
            borderBottomLeftRadius: "0.2rem",
            borderBottomRightRadius: "0.2rem",
            padding: "0.7rem",
        },

    }
})

export interface IRightBoxProps {
    hasMore?: boolean;
    title: string;
    children: any;
}
export const RightBox = (props: IRightBoxProps) => {
    const classes = useStyles();
    let jsxMore;
    if(props.hasMore) {
        jsxMore = (
            <div className={classes.moreIconContainer}>
                <MoreHorizIcon />
            </div>
        )
    }
    return (
        <div className={classes.container}>
            <header className={classes.header}>
                {props.title}
                {jsxMore}
            </header>
            <main className={classes.body}>
                {props.children}
            </main>
        </div>
    );
}
