const  MySQLDataSource = require('../util/mysqlDataSource');

class Restroom extends MySQLDataSource {
	constructor() {
		super();

	}

 	async getRestrooms() {
		try {
			const query = `select * from restroom limit 10`;
			const result = await this.executeQuery(query);
			const data = this.responseToObjArray(result);

			return data;
		} catch (error) {
			console.log(error);
			return []
		};
	}

	async SearchRestroomsByLocation(lat, lng) {
		try {
			const query = `
			SELECT
				ID,
				TITLE,
				ROUND(ST_Distance_Sphere(LOCATION, POINT(${lng}, ${lat}))) as DIST,
				ST_Y(LOCATION) as LAT,
				ST_X(LOCATION) as LNG
				FROM
			restroom
				WHERE
			ST_Distance_Sphere(LOCATION, POINT(${lng}, ${lat})) < 1000;
			`;
			console.log(query);
			const result = await this.executeQuery(query);
			const data = await this.responseToObjArray(result);
			console.log(data);
			return data;

		} catch (error) {
			console.log(error);
			return []

		}
	}
}

module.exports = Restroom;