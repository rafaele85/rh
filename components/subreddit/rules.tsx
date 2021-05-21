import {RightBox} from "./right-box";
import {makeStyles, Theme} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles((theme: Theme) => {
    return {
        list: {
            padding: 0,
            margin: 0,
            paddingLeft: "0.5rem",
        },
        li: {
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            cursor: "pointer",
        },
        rule: {
            margin: 0,
            padding: 0,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.8rem",
            fontWeight: 600,
        },
        hr: {
            width: "100%",
            borderTop: 0,
            borderColor: "rgba(128, 128, 128, 0.2)",
        }
    }
})

export interface IRulesProps {
    name: string;
}

const rules: string[] = [
    "Be kind",
    "No bashing",
    "Be inclusive",
    "Some Self-promotion is OK, Spam is not OK",
    "Demos should link source code or live demos",
    "Github, not Pornhub",
    "Portfolios on Sundays only"
]

export const Rules = (props: IRulesProps) => {
    const classes = useStyles();
    const jsxRules = rules.map((r, index) => (
        <li className={classes.li} key={index}>
            <p className={classes.rule}>
                {index+1}. {r} <KeyboardArrowDownIcon />
            </p>
            {index < rules.length-1 &&
                <hr className={classes.hr} />
            }
        </li>
    ))
    return (
        <RightBox title={`r/${props.name} Rules`} >
            <ol className={classes.list}>
                {jsxRules}
            </ol>
        </RightBox>
    )
}
