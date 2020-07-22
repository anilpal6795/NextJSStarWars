import Document, { Html, Main, NextScript, Head  } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps
        }
    }

    render(){
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    }
}

export default MyDocument;