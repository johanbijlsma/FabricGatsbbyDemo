import React from "react"
import { Stack, Text, Link, FontWeights } from "office-ui-fabric-react"
import "./index.css"
import logo from "./fabric.png"
const boldStyle = { root: { fontWeight: FontWeights.semibold } }
import NavBasicExample from "./../components/nav"
import CalendarInlineExample from "./../components/datepicker"
const App: React.FunctionComponent = () => {
	return (
		<Stack
			horizontal
			styles={{
				root: {
					margin: "0 auto",
					textAlign: "center",
					color: "#605e5c",
				},
			}}
			className='App'
			gap={15}
		>
			<Stack.Item grow={1} horizontal>
				<NavBasicExample selectedKey='key1' />
			</Stack.Item>
			<Stack.Item grow={2}>
				<Stack>
					<img src={logo} alt='logo' />
					<Text variant='xxLarge' styles={boldStyle}>
						Welcome to Your UI Fabric App
					</Text>
					<Text variant='large'>
						For a guide on how to customize this project, check out the UI
						Fabric documentation.
					</Text>
					<Text variant='large' styles={boldStyle}>
						Essential Links
					</Text>
					<Stack horizontal gap={15} horizontalAlign='center'>
						<Link href='https://developer.microsoft.com/en-us/fabric'>
							Docs
						</Link>
						<Link href='https://stackoverflow.com/questions/tagged/office-ui-fabric'>
							Stack Overflow
						</Link>
						<Link href='https://github.com/officeDev/office-ui-fabric-react/'>
							Github
						</Link>
						<Link href='https://twitter.com/officeuifabric'>Twitter</Link>
					</Stack>
					<Text variant='large' styles={boldStyle}>
						Design System
					</Text>
					<Stack horizontal gap={15} horizontalAlign='center'>
						<Link href='https://developer.microsoft.com/en-us/fabric#/styles/icons'>
							Icons
						</Link>
						<Link href='https://developer.microsoft.com/en-us/fabric#/styles/typography'>
							Typography
						</Link>
						<Link href='https://developer.microsoft.com/en-us/fabric#/styles/themegenerator'>
							Theme
						</Link>
					</Stack>
					<Link href='/blog'>Link to my awesome blog 🎉</Link>
				</Stack>

				<Stack horizontal gap={15}>
					<CalendarInlineExample />
				</Stack>
			</Stack.Item>
		</Stack>
	)
}

export default App
