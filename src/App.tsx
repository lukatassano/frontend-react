import React from 'react'
import Routes from './routes'
import Header from './components/Header'

const App: React.FC = () => {
	return (
		<>
			<Header />
			<Routes />
		</>
	)
}

export default App;