export default async function handler(request, response) {
  console.log(request.query);
  // this is giving me an object
  // {type: string, method: string, }
  // example: {type: "location", method: "create"}
}
