import { React, useState } from "react";
import {
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CardAddress from "../../components/CardAddresss/CardAddress";
import { getAddressBook, createAddressBook } from "../../api/addressApi";
import RadioAddressPayment from "../../components/RadioAddressPayment/RadioAddressPayment";
// const addressBook = [
// 	{
// 		deliveryID: 34,
// 		address:
// 			"57, Nguyễn Cửu Đàm, phường Tân Sơn Nhì, quận Tân Phú, tan son nhì, Thành phố Hồ Chí Minh, Vietnam",
// 		name: "qwe",
// 		phone: "0945461850",
// 		userID: 17,
// 	},
// 	{
// 		deliveryID: 36,
// 		address: "111",
// 		name: "112",
// 		phone: "121212",
// 		userID: 17,
// 	},
// 	{
// 		deliveryID: 37,
// 		address: "57 Nguyễn Cửu Đàm, asd, asd, Ho Chi Minh City",
// 		name: "Trương Minh Nam Phú",
// 		phone: "+84945461850",
// 		userID: 17,
// 	},
// 	{
// 		deliveryID: 38,
// 		address: "asd, asd, asd, ads",
// 		name: "asd",
// 		phone: "+84945461850",
// 		userID: 17,
// 	},
// 	{
// 		deliveryID: 39,
// 		address: "sd, sd, sd, sdsd",
// 		name: "sd",
// 		phone: "sdsd",
// 		userID: 17,
// 	},
// ];
const Payment = () => {
	const [addressBook, setAddressBook] = useState([
		{
			deliveryID: 34,
			address:
				"57, Nguyễn Cửu Đàm, phường Tân Sơn Nhì, quận Tân Phú, tan son nhì, Thành phố Hồ Chí Minh, Vietnam",
			name: "qwe",
			phone: "0945461850",
			userID: 17,
		},
		{
			deliveryID: 36,
			address: "111",
			name: "112",
			phone: "121212",
			userID: 17,
		},
		{
			deliveryID: 37,
			address: "57 Nguyễn Cửu Đàm, asd, asd, Ho Chi Minh City",
			name: "Trương Minh Nam Phú",
			phone: "+84945461850",
			userID: 17,
		},
		{
			deliveryID: 38,
			address: "asd, asd, asd, ads",
			name: "asd",
			phone: "+84945461850",
			userID: 17,
		},
		{
			deliveryID: 39,
			address: "sd, sd, sd, sdsd",
			name: "sd",
			phone: "sdsd",
			userID: 17,
		},
	]);
	const [chosenAddress, setChosenAddress] = useState(34); //-1 is default, create new address
	const [disableAddress, setDisableAddress] = useState(false);

	function onClickRadioBtn(id) {
		console.log(id);
		if (id === -1) {
			setChosenAddress(-1);
		} else {
			setChosenAddress(id);		
		}
	}

	return (
		<div>
			<Typography variant="h5" sx={{ fontWeight: "600" }} component="div">
				Address Book
			</Typography>
			<Typography variant="p" component="div">
				(you can edit exists address book by choosing and editing below)
			</Typography>
			{/* newAddress */}
			{/* <RadioAddressPayment
						onClick={onClickRadioBtn}
						disabled={disableAddress}
					/> */}
			{addressBook.map((address) => (
				<RadioAddressPayment
					key={addressBook.deliveryID}
					chosenAddress={chosenAddress}
					address={address}
					onClickAddress={onClickRadioBtn}
					disabled={disableAddress}
				/>
			))}
			{/* <Radio
				checked={chosenAddress === addressBook[0].deliveryID}
				onChange={() => onClickRadioBtn(addressBook[0].deliveryID)}
				value={addressBook[0].deliveryID}
				// inputProps={{ "aria-label": "A" }}
			/>
			<Radio
				checked={chosenAddress == addressBook[1].deliveryID}
				onChange={() => onClickRadioBtn(addressBook[1].deliveryID)}
				value={addressBook[1].deliveryID}
				// inputProps={{ "aria-label": "A" }}
			/> */}
			{/* <Box
				sx={{ display: "flex", alignItems: "center" }}
				onClick={() => onClickRadioBtn(addressBook[0].deliveryID)}>
				<Radio
					checked={chosenAddress == addressBook[0].deliveryID}
					onChange={()=>onClickRadioBtn(addressBook[0].deliveryID)}
					value={addressBook[0].deliveryID}
					// inputProps={{ "aria-label": "A" }}
				/>

				<Typography variant="p" sx={{ fontSize: 16 }} component="div">
					Name: {addressBook[0].name} <br />
					Address: {addressBook[0].address} <br />
					Phone: {addressBook[0].phone}
				</Typography>
			</Box>
			<Box
				sx={{ display: "flex", alignItems: "center" }}
				onClick={() => onClickRadioBtn(addressBook[1].deliveryID)}>
				<Radio
					checked={chosenAddress === addressBook[1].deliveryID	}
					onChange={()=>onClickRadioBtn(addressBook[1].deliveryID)}
					value={addressBook[1].deliveryID}
					// inputProps={{ "aria-label": "A" }}
				/>

				<Typography variant="p" sx={{ fontSize: 16 }} component="div">
					Name: {addressBook[1].name} <br />
					Address: {addressBook[1].address} <br />
					Phone: {addressBook[1].phone}
				</Typography>
			</Box> */}
		</div>
	);
};

export default Payment;
