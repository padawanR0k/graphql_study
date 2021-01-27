
## 기본개념
- gql로 감싸서 타입을 만든다.
- 엔티티의 타입은 기본타입과 custom타입이 있다
- Query
	- 조회
- Mutaion
	- 수정

## DB와의 연결은?
```js
const { RESTDataSource } = require('apollo-datasource-rest');

class LaunchAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.spacexdata.com/v2/';
	}
}

module.exports = LaunchAPI;
```
### 조회 프로세스
- url에서 특정 데이터를 가져온다
- 그 데이터에서 gql로 내가 필요한 부분만 가져온다?? -> 그럼 다 가져와야하는건가

- 백단에서 할일
	- 프론트단이 사용할 쿼리를 설계해줘야함. 실제 디비랑 매칭되게끔.
	- 약간 프론트단 용 view를 만드는 느낌?
	- DB가 바뀌어도 동일한 형태만 만들면 된다. (DB와 디커플링)
- 프론트단에서 할일

- 리졸버?
	- 타입과 서버를 이어준다.
	- 단순히 DB내용을 가져오는게아니면, 리졸버에 등록해야하는듯? 이때 context내부에 dataSource와 연결함
- DataSource
	- 내가 작성한 스키마를 js에 등록한다.
	- 내가 원하는 로직을 만들수있다.
		- 반복문 돌면서 이것저것 가능함


- api결과물을 매핑할수도 있고, DB랑 연결할 수도 있는건가/?????

- pagenation
	- 기존 스키마 변경해야함.
	- 지금 몇페이지에 있는지, 다음 정보는 존재하는지에 대한 정보를 새로운 타입으로 만들어줘야함
		- 점점 스키마가 커진다. 이건 또 어떻게 관리하는걸까...