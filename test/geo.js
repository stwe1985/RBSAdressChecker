import geo from "../geo.js";


      
QUnit.test("output", async function (assert) {
    const d = await geo("Berliner Allee", "210", "13088");
    assert.equal(typeof(d), "object");    
    assert.notEqual(typeof(d), "object");    
});
