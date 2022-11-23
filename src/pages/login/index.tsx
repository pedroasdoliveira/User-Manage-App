import { NextPage } from "next";
import Head from "next/head";
import * as Style from "../../styles/login/style";

const Login: NextPage = () => {
  return (
    <Style.Container>
      <Head>
        <title>Login</title>
        <meta name="login" content="Página de login da aplicação" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Style.Body>
        <Style.Content>
            <Style.ContentCard>
                
            </Style.ContentCard>
        </Style.Content>
      </Style.Body>
    </Style.Container>
  );
};

export default Login;
