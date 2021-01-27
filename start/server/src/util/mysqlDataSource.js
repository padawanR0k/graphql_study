const mysqlx = require('@mysql/xdevapi');
const { dbConfig } = require('../utils')
const { DataSource } = require("apollo-datasource");

class MySQLDataSource extends DataSource {
	constructor() {
		super();
	}

	initialize(config) {
		this.context = config.context;
	}

	async getSession() {
		const session = await mysqlx.getSession(dbConfig);
		return session;
	}

	async executeQuery(query) {
		const session = await this.getSession();
		const result = await session.sql(query).execute();
		return result;
	}

	async responseToObjArray(result) {
		const fetchData = await result.fetchAll();
		const cols = result.getColumns();
		const data = fetchData.map(item => {
			const row = cols.reduce((acc, curr, index) => {
				acc[curr.getColumnLabel()] = item[index]
				return acc;
			}, {});
			return row;
		})

		return data;
	}
}

module.exports = MySQLDataSource;