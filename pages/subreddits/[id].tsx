import {router} from "next/client";
import {makeStyles} from "@material-ui/core";
import {useEffect, useState} from "react";
import {Subreddit} from "@prisma/client/index";
import {Layout} from "../../components/layout";

const useStyles = makeStyles(() => {
    return {
        container: {

        },
        title: {

        },
        goBack: {

        }
    };
});

const SubReddit = () => {
    const [subreddit, setSubreddit] = useState<Subreddit|undefined>();

    const fetchData = async () => {
        try {
            const id = router.query?.id;
            //const id=3;
            console.log("retrieving /api/subreddits/"+id, id)
            const res = await fetch(`/api/subreddit/${id}`);
            const sr = await res.json();

            setSubreddit(sr);
        } catch(err) {
            console.error(err);
        }
    }


    useEffect(() => {
        void fetchData();
    }, [router.query]);


    const handleGoBack = async () => {
        await router.push("/");
    };

    const classes = useStyles();
    return (
        <Layout>
            <div className={classes.container}>
                <h1 className={classes.title}>Welcome to subreddit {subreddit?.name}</h1>
                <button className={classes.goBack} onClick={handleGoBack}>
                    Go back
                </button>
            </div>
        </Layout>
    );
};

export default SubReddit;