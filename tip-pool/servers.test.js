describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function() {
        // initialization logic
        serverNameInput.value = 'Alice';
    });

    it('should add a new server to allServers on submitServerInfo()', function() {
        submitServerInfo();

        expect(Object.keys(allServers).length).toEqual(1);
        expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });

    it('should properly enter a new server into the table', function() {
        submitServerInfo();
        updateServerTable();

        const serverCheck = document.querySelectorAll('#serverTable tbody tr td');
        expect(serverCheck.length).toEqual(2);
        expect(serverCheck[0].innerText).toEqual('Alice');
        expect(serverCheck[1].innerText).toEqual('$0.00');
    })

    afterEach(function() {
        // teardown logic
        allServers = {};
        serverId = 0;
        const cleanUp = document.querySelector("#serverTable tbody").childNodes
        cleanUp.forEach(function(key) {
            key.remove();
        })
    });
});