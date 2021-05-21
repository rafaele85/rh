import {Nav} from "./nav";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => {
    return {
        container: {

        },
        main: {
            marginTop: "100px",
        }
    }
})

export interface ILayoutProps {
    children: any;
}

export const Layout = (props: ILayoutProps) => {
    const classes=useStyles();
    return (
        <div className={classes.container}>
            <Nav />
            <div className={classes.main}>
                {props.children}
            </div>
        </div>
    )
}
