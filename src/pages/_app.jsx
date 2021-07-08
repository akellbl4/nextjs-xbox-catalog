import Head from 'next/head'
import 'styles/global.css'

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="Clone of Xbox Game Catalog. Implemented with Next.js and Tailwind"
				/>
				<meta name="keywords" content="HTML, CSS, JavaScript"></meta>
				<meta name="author" content="Pavel Mineev" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}
