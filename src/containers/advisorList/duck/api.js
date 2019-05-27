import faker  from 'faker';

const  buildFakeAdvisors = () => {
   return {
    name: faker.name.findName(),
    reviews: faker.random.number(),
    language: faker.random.locale(),
    status: faker.random.boolean() === true ? true : false
  };
}
export const fecthAdvisorList = () => {
   const response = {};
   response.items = [];
   for(var i = 0; i < 200; i++) {
	  response.items.push(buildFakeAdvisors())
	}
	return response;
};
