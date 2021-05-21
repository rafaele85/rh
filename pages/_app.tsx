import '../styles/globals.css'
import {Provider} from "next-auth/client";

export interface IMyAppProps {
  Component: any;
  pageProps: any;
}
function MyApp(props: IMyAppProps) {
  const Component = props.Component;
  return (
      <Provider session={props.pageProps.session}>
        <Component {...props.pageProps} />
      </Provider>
  );
}

export default MyApp
