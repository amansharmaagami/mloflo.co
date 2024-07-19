import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Landing from "../components/Landing";

export default function Home() {
    return (
        <div>
            <Head>
                <title>maildump.in</title>
                <meta
                    name="description"
                    content="A simple disposable email system"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            {/* <main>
				<h1 className="text-3xl font-bold underline">Hello world!</h1>
				Hello
			</main> */}

            <Landing />

            <Footer />
        </div>
    );
}
