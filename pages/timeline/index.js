import { Fragment } from "react";
import Link from 'next/link' 
import AppLayout from "../../components/appLayout";


export default function Timeline ({ username }) {
	return (
		<Fragment>

			<AppLayout> {/* Para que me de estils globales */}
			<h1>Timeline of {username}</h1>

			<Link href="/"><a>Go home</a></Link>
	
			<style jsx>{`
				h1 {
					color: red;
				}
			`}</style>
			</AppLayout>
		</Fragment>
	)
}


// De Next en los componentes tipo PAGES. 
// Las props que recibe el componente. Se ejecuta en el servidor ANTES que el componente

Timeline.getInitialProps = () => {
	return (
		fetch("http://localhost:3000/api/hello")
			.then(res => res.json())
			.then(response => {
				console.log(response); // esto se ve en la terminal que es donde se ejecuta
				const { username } = response
				return { username } // esto son las props que le llega al compnente por getInitialProps
		}))
}
