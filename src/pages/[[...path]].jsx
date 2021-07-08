import Head from 'next/head'
import { fetchProducts } from 'lib/products'
import { Catalog } from 'components/Catalog'

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
		</>
	)
}
