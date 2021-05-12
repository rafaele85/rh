import {Nav} from "./nav";

export interface ILayoutProps {
  children: any;
}

export const Layout = (props: ILayoutProps) => {
    return (
        <div>
            <Nav />
            <div>
                {props.children}
            </div>
        </div>
    );
};