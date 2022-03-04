import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';

function Detail() {
    const [movie, setMovie] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (Object.keys(router.query).length > 0) {
            ; (async () => {
                setIsLoading(true);
                const res = await fetch(`https://json-serve-hihi.herokuapp.com/api/v1/movies/${router.query?.id}`);
                const data = await res.json();
                setMovie(data);
                setIsLoading(false);
            })();
        }
    }, [router]);
    if (isLoading) return <>Loading....</>;

    return (
        <Layout meta={
            <>
                <title>Booking Movie</title>
                <meta name="description" content="Booking movie" />
                <meta property="og:image" content={movie?.poster} />
            </>
        }>
            <div>[id]</div>
        </Layout>
    );
}


// // pages/blog/[slug].js
// export async function getStaticPaths(a) {
//     console.log(a);
//     return {
//         paths: [
//             // String variant:
//             '/movie/2',
//             // Object variant:
//             { params: { id: '2' } },
//         ],
//         fallback: true,
//     };
// }

// export async function getStaticProps(context) {
//     console.log(context);
//     return {
//         props: {}, // will be passed to the page component as props
//     };
// }


export default Detail;