import { useEffect, useState } from 'react';
import Link from '../src/components/Link';
import Head from 'next/head';
import PageTitle from '../src/components/PageTitle';

export async function getStaticProps(context) {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) => {
            return respostaDoServidor.json();
        })
        .then((resposta) => {
            return resposta;
        });
    return {
        props: {
            faq,
        },
    };
}

export default function FAQPage({ faq }) {
    // const [faq, setFaq] = useState([]);
    // useEffect(() => {

    // }, []);
    return (
        <div>
            <Head>
                <PageTitle>FAQ - Alura Cases Campanha</PageTitle>
            </Head>
            <h1>Páginas de perguntas</h1>
            <Link href="/">Ir para a Home</Link>
            <ul>
                {faq.map(({ answer, question }) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}