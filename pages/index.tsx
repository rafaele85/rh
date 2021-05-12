import { useSession} from 'next-auth/client'
import {Main} from "../components/main";
import {signIn} from 'next-auth/client'
import {Nav} from "../components/nav";
import {Layout} from "../components/layout";

export default function Home() {
  const [ session, loading ] = useSession();

  const handleClick = async () => {
      await signIn();
  };

  if(session) {
    return (
        <Layout>
            <Main />
        </Layout>
    );
  }
  return (
      <Layout>
          Not signed in <br />
          <button onClick={handleClick}>Sign In</button>
      </Layout>
  );
}



