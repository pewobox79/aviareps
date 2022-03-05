import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import 'styles/globals.css';

import { userService } from 'services';
import { Nav, Alert } from 'components';

export default App;

function App({ Component, pageProps }) {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        authCheck(router.asPath);

        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        router.events.on('routeChangeComplete', authCheck)

        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function authCheck(url) {
        setUser(userService.userValue);
        const publicPaths = ['/account/login', '/account/register'];
        const path = url.split('?')[0];
        if (!userService.userValue && !publicPaths.includes(path)) {
            setAuthorized(false);
            router.push({
                pathname: '/account/login',
                query: { returnUrl: router.asPath }
            });
        } else {
            setAuthorized(true);
        }
    }

    return (
        <>
            <Head>
                <title>AVIARESP - User Registration and Login </title>
                {/* eslint-disable-next-line @next/next/no-css-tags */}
                <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />      
            </Head>

            <div className={`app-container ${user ? 'bg-light' : ''}`}>
                <Nav />
                <Alert />
                {authorized &&
                    <Component {...pageProps} />
                }
            </div>

            <div className="text-center footer">
                <div class="copyrights">
                    <p>Author: <a href='https://www.linkedin.com/in/shyhrete-buzaku-a3386615b/'>Shyhrete Buzaku</a></p>
                    <p>© 2021 AVIAREPS. All Rights Reserved.</p>
                    <a class="bottom-line" href="https://www.aviareps.com/legal/">Imprint</a>&nbsp;
                    <a class="bottom-line" href="https://www.aviareps.com/legal/privacy-policy-information/">Privacy Policy</a>
                    <a class="bottom-line" href="https://www.aviareps.com/legal/cookie-policy/" title="cookie policy">Cookie Policy</a>
                </div>
            </div>
        </>
    );
}