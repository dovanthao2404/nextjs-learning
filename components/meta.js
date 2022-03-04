import Head from 'next/head';

export default function Meta({ children }) {
    return (
        <Head>
            <meta name="msapplication-TileColor" content="#000000" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="theme-color" content="#000" />
            {children}
        </Head>
    );
}
