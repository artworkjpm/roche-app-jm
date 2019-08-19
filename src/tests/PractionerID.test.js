//this test uses the real filter function used in the live code in Home.js

test("filterID", () => {
  const data = [{ practitionerId: "2588ac7f57fd9b49" }];
  const typedId = "2588ac7f57fd9b49";
  function checkPid(id) {
    return id.practitionerId === typedId;
  }
  let newList = data.filter(checkPid);
  console.log(newList);

  expect(data.filter(checkPid)).toEqual([{ practitionerId: "2588ac7f57fd9b49" }]);
});
