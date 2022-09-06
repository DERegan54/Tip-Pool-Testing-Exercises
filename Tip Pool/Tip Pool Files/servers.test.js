describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
   // initialization logic
    let serverNameInput = document.getElementById('serverName');
    serverNameInput.value = 'Alice';
    }); 

    afterEach (function() {
    // teardown logic
    let serverTbody = document.querySelector('#serverTable tbody');
    serverID = 0;
    serverTbody.innerHTML = '';
    allServers = {};   
    })
  

 it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should remove server from table', function (){

    submitServerInfo();
    updateServerTable();
    addDeleteBtn();
    
    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTdList.length).toEqual(0);   

    
  })


  
});
