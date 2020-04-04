import React from 'react';
import Container from '@material-ui/core/Container';
import { Calendar } from './components/Calendar';
import { Header } from './components/Header';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { MonthSwitcher } from './components/MonthSwitcher';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#2196f3',
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<MonthSwitcher />
			<Container maxWidth='lg'>
				<Calendar />
			</Container>
		</ThemeProvider>
	);
}

export default App;
