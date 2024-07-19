import { useRouter } from "next/router";
import { useQuery } from "react-query";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Empty from "../../components/Empty";
import Item from "../../components/list/Item";
import List from "../../components/list/List";

function Inbox() {
    const router = useRouter();
    const { inbox } = router.query;

    async function getMails() {
        try {
            return await (await fetch("/api/mail/" + inbox)).json();
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    const { data: mails } = useQuery(["mails", inbox], getMails, {
        initialData: [],
    });

    return (
        <div>
            <Header />
            <main className="sm:p-1 md:p-4 lg:p-8">
                <h1 className="font-medium text-center leading-tight text-2xl md:text-3xl lg:text-4xl m-2 sm:m-4 md:m-6 lg:m-10 text-gray-600">
                    {inbox}@maildump.in
                </h1>

                <section className="sm:p-2 md:p-3 lg:p-4">
                    {Boolean(mails.length) ? (
                        <List>
                            {mails.map((mail) => (
                                <Item key={mail._id} {...mail} />
                            ))}
                        </List>
                    ) : (
                        <Empty />
                    )}
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Inbox;
