let resturant = {
	name: "Antonio's",
	guestCapacity: 75,
	guestCount: 0,
	checkAvailability: function (partySize) {
		return this.guestCount + partySize < this.guestCapacity;
	},
	// Challenge
	seatParty: function (partySize) {
		this.guestCount += partySize;
	},

	removeParty: function (partySize) {
		this.guestCount -= partySize;
	},
};

let status = resturant.checkAvailability(15);
console.log(status);
// Challenge
resturant.seatParty(72);
console.log(resturant.checkAvailability(4));
resturant.removeParty(5);
console.log(resturant.checkAvailability(4));
