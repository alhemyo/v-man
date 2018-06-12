
// Project schema

project: {

	id: 0,
	name: "Project name",
	admin: "Jane Doe",
	client: "VT",
	state: "state",
	priority: "high",
	backupDisk: "",

	timesheet: {

		created: "day - month - year",
		finished: "day - month - year",
		deadline: "day - month - year",
		backup: "day - month - year"

	}

},

// User schema

user: {

	// Personal Info

	id: 0,
	name: "Jane",
	surname: "Doe",
	gender: "female",
	city: "Skopje",
	state: "Macedonia",
	address: "Ruger Boshkovic 20/1",
	phone: "0038970 000 000",
	IdNumber: "A2653421",
	IdExpireDate: "day - month - year",
	UMCN: "0000000000000",
	bankName: "Tutunska Banka AD - Skopje",
	accNumber: "000000000000",

	// Work Info

	adminType: {

		projectAdmin: true,
		userAdmin: true,
		uberAdmin: true

	},

	employmentDate: "day - month - year",
	position: "design",
	status: ""

}