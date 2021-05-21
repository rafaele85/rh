
export enum IPostType {
    NONE="",
    NEWS="News",
    NEEDSHELP="Needs Help",
    RESOURCE="Resource",
    CAREERS="Careers",
    DISCUSSION="Discussion",
}


export type IPost = {
    id: number;
    type: IPostType;
    postedBy: string;
    postedOn: Date;
    title: string;
    text: string;
    votes: number;
    comments: number;
}

export const mockPosts: IPost[] = [
    {   id: 1,
        type: IPostType.DISCUSSION,
        title: "Clean pattern for handling roles and permissions in large-scale React apps",
        postedBy: "u/allis",
        postedOn: new Date("2021-05-20 12:00:14"),
        text: "Any React application starts off nice and clean until you start layering conditional logic on top of it. And it quickly gets worse when you start adding granular permissions and roles. This post covers how we can manage granular roles and permissions in React.",
        comments: 31,
        votes: 135,
    },
    {   id: 2,
        type: IPostType.DISCUSSION,
        title: "[NextJS] Do you put a lot of logic in /pages directory?",
        postedBy: "u/hellical_imp",
        postedOn: new Date("2021-05-20 03:00:14"),
        text: "NextJS's file-based routing is definitely useful, but it does make it more difficult to colocate relevant files (styles, tests, queries, etc).\n" +
            "\n" +
            "So I'm wondering if anyone has experience with basically putting very little logic in /pages and instead just having those components basically render a \"page\" component that lives in a regular /components directory? Does that work well? What issues did you run into?",
        comments: 4,
        votes: 3,
    },
    {   id: 3,
        type: IPostType.DISCUSSION,
        title: "What frustrates you the most with React? What do you love the most?",
        postedBy: "u/ucoder9458",
        postedOn: new Date("2021-05-21 1:00:14"),
        text: "github.com/Rising...",
        comments: 0,
        votes: 0,
    },
    {   id: 4,
        type: IPostType.DISCUSSION,
        title: "Wanna try different state management? Have a look at react-easy-state",
        postedBy: "u/SwitchOnNite",
        postedOn: new Date("2021-05-21 3:00:14"),
        text: "github.com/Rising...",
        comments: 0,
        votes: 0,
    },
    {   id: 5,
        type: IPostType.NEEDSHELP,
        title: "Hooks or Class Components ?",
        postedBy: "u/Due_Reflection",
        postedOn: new Date("2021-05-21 3:00:14"),
        text: "I'm getting started with learning react. I was wondering if react hooks is the standard, or people still use class based components in Prod apps ?",
        comments: 11,
        votes: 0,
    },

    {   id: 6,
        type: IPostType.RESOURCE,
        title: "Super cool patterns I found, but as JR developer I've literally never seen this before.Are these practices commonplace?",
        postedBy: "u/verysad98",
        postedOn: new Date("2021-05-20 1:00:14"),
        text: "javascript.plainenglish.io/5-adva...",
        comments: 18,
        votes: 143,
    },

    {   id: 7,
        type: IPostType.NEWS,
        title: "Microsoft is finally retiring IE",
        postedBy: "u/erwelter",
        postedOn: new Date("2021-05-20 12:00:14"),
        text: "blogs.windows.com/window...",
        comments: 89,
        votes: 830,
    },
]
