import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			text: {
				primary: string;
				secondary: string;
			}

			background: {
				primary: string;
				secondary: string;
				tertiary: string;
			}
		}
	}
}
