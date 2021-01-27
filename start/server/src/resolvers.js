const { paginateResults } = require('./utils');
/**
 * fieldName: (parent, args, context, info) => data;
 * parent 타입?
 * args 파라미터
 * context 서버전역에서 사용될 것들 ex) auth
 * info 특이한 경우에만 사용
 */
module.exports = {
	Query: {
		restrooms: async(_, {}, { dataSources }) => {
			const data = await dataSources.restroomAPI.getRestrooms();
			// console.log(data);
			return data;
		},
		searchRestrooms: async(_, {lat, lng}, { dataSources }) => {
			const data = await dataSources.restroomAPI.SearchRestroomsByLocation(lat, lng);
			// console.log(data);
			return data;
		},
		// launches: async (_, {pageSize = 20, after}, { dataSources }) => {
		// 	const allLaunches = await dataSources.launchAPI.getAllLaunches();
		// 	allLaunches.reverse();

		// 	// util성 함수로 전체 결과를 잘라서준다? 그럼 결국에 서버에서 전부다 불러오는건가???
		// 	const launches = paginateResults({
		// 		after,
		// 		pageSize,
		// 		results: allLaunches
		// 	})
		// 	const cursor = launches.length ? launches[launches.length - 1].cursor : null;

		// 	return {
		// 		launches,
		// 		cursor, // 마지막 아이템의 커서값
		// 		hasMore: launches.length
		// 			? cursor !== allLaunches[allLaunches.length - 1].cursor
		// 			: false
		// 	}
		// },
		// launch: (_, { id }, { dataSources }) =>
		// 	dataSources.launchAPI.getLaunchById({ launchId: id }),
		// me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
	},
	// Mission: {
	// 	// The default size is 'LARGE' if not provided
	// 	missionPatch: (mission, { size } = { size: 'LARGE' }) => {
	// 		return size === 'SMALL'
	// 			? mission.missionPatchSmall
	// 			: mission.missionPatchLarge;
	// 	},
	// },
	// Launch: {
	// 		isBooked: async (launch, _, { dataSources }) => dataSources.userAPI.isBookedOnLaunch({ launchId: launch.id }),
	// },
	// User: {
	// 	trips: async (_, __, { dataSources }) => {
	// 		// get ids of launches by user
	// 		const launchIds = await dataSources.userAPI.getLaunchIdsByUser();
	// 		if (!launchIds.length) return [];
	// 		// look up those launches by their ids
	// 		return (
	// 			dataSources.launchAPI.getLaunchesByIds({
	// 				launchIds,
	// 			}) || []
	// 		);
	// 	},
	// }
};
