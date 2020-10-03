import Typography from "@material-ui/core/Typography";
import Head from "next/head";
import SignUp from "@components/SignUp";

export default function Index() {
  return (
    <>
      <Head>
        <title>SignUp</title>
      </Head>
      <SignUp></SignUp>
    </>
  );
}
