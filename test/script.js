const { getBasename } = require("basename");

async function testBasename() {
  const name = await getBasename("0xd7cbC847A17B3d24dAa861AD46fFe96405b59846");
  console.log(name);
}

testBasename();
