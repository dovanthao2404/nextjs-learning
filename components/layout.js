import Meta from './meta';

export default function Layout({ children, meta }) {
    return (
        <>  <Meta>
            {meta}
        </Meta>
            <div className="main">
                <main>{children}</main>
            </div>
        </>
    );
}
