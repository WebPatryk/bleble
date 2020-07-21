import React from 'react';

export default function DeliveryCity({ street, postCode, address }) {
	const cityFullName = ` ${street} , ${postCode} , ${address}`;
	return (
		<option className="option" value={cityFullName}>
			{cityFullName}
		</option>
	);
}
