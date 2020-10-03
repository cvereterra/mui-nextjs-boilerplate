import Typography from "@material-ui/core/Typography";
import Head from "next/head";
import LogIn from "@components/LogIn";

export default function Index() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LogIn></LogIn>
    </>
  );
}
