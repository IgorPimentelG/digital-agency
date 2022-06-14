import { ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

const Theme: React.FC<{ children: ReactNode }> = ({ children }) => {

	const config: DefaultTheme = {
		colors: {
			text: {
				primary: "#272D38",
				secondary: "#667085"
			},

			background: {
				primary: "#FFFFFF",
				secondary: "#8EADD5",
				tertiary: "#F6F6F6"
			}
		}
	};

	return(
		<ThemeProvider theme={config}>
			{children}
		</ThemeProvider>
	);
};

export default Theme;
