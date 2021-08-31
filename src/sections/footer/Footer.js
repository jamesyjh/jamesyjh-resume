import React from "react";
import { getDate } from "../../helpers/dates";

import styled from "styled-components";

const Footer = () => {
	const StyledFooter = styled.footer`
		padding: 15px 0;
		text-align: center;
		background-color: #111;
	`;

	const StyledFooterContent = styled.span`
		color: #fff;
		font-size: 1.25vh;
		line-height: 40px;
		font-family: "Raleway";
	`;

	return (
		<StyledFooter>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-4"></div>
					<div className="col-md-4">
						<StyledFooterContent>
							<b>
								{getDate()} {new Date().getFullYear()}.&nbsp;
							</b>
							Designed by James Hong.
						</StyledFooterContent>
					</div>
				</div>
			</div>
		</StyledFooter>
	);
};

export default Footer;
