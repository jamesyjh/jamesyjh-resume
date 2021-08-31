export const getDate = () => {
	let month = new Date().getUTCMonth() + 1;
	let printedMonth = "";

	switch (month) {
		case 1:
			printedMonth = "January";
			break;
		case 2:
			printedMonth = "February";
			break;
		case 3:
			printedMonth = "March";
			break;
		case 4:
			printedMonth = "April";
			break;
		case 5:
			printedMonth = "May";
			break;
		case 6:
			printedMonth = "June";
			break;
		case 7:
			printedMonth = "July";
			break;
		case 8:
			printedMonth = "August";
			break;
		case 9:
			printedMonth = "September";
			break;
		case 10:
			printedMonth = "October";
			break;
		case 11:
			printedMonth = "November";
			break;
		case 12:
			printedMonth = "December";
			break;
		default:
			break;
	}
	return printedMonth;
};
