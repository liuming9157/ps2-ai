import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* plausible  analysis*/}
                <script defer data-domain="ps2ai.com" src="https://stat.re/js/script.js"></script>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
