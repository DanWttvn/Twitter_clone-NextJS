import { Fragment } from "react";

export default function AppLayout({ children }) {
	return (
		<Fragment>

			<main>
				{ children }
			</main>

			{/* Global Styles */}
			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
					Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
					sans-serif;
				}
	
				* {
					box-sizing: border-box;
				}

				a {
					text-decoration: none;
				}
	
			`}</style>
		</Fragment>
	)
	
}
