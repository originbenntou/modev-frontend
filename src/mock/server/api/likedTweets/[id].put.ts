export default defineEventHandler(async (event) => {
  console.log("にゃーん")
  const body = await readBody(event)
  return { body }
})
