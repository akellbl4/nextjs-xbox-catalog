import Head from 'next/head'
import { fetchProducts } from 'lib/products'
import Catalog from 'components/Catalog'

export async function getServerSideProps(ctx) {
	const products = await fetchProducts({
		filter: ctx.params.path?.[0],
		available: ctx.query.available,
	})

	return {
		props: {
			products,
		},
	}
}

export default function Index({ products }) {
	return (
		<>
			<Head>
				<title>Xbox Games Catalog</title>
			</Head>
			<Catalog products={products} />
			<footer className="mt-4 p-6 text-center leading-tight space-y-2">
				<p>
					Made with ❤️ by{' '}
					<a
						href="https://pavel.mineev.me"
						className="inline-block border-b border-sky-200 text-sky-600"
					>
						Pavel Mineev
					</a>
				</p>
				<p>
					Powered by{' '}
					<a
						href="https://nextjs.org"
						className="inline-block border-b border-sky-200 text-sky-600"
					>
						Next.js
					</a>{' '}
					and{' '}
					<a
						href="https://tailwindcss.com"
						className="inline-block border-b border-sky-200 text-sky-600"
					>
						Tailwind CSS
					</a>
					. Hosted on ▲
					<a
						href="https://vercel.com"
						className="inline-block border-b border-sky-200 text-sky-600"
					>
						Vercel
					</a>
				</p>
			</footer>
		</>
	)
}
