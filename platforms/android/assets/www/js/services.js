var services = angular.module('starter.services', []);

services.factory('Beacons', function() {
  // Might use a resource here that returns a JSON array

  //Création du tableau contenant les salles
  var beacons = [
    {
      id: 's01',
      uuid: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
      major: 1,
      minor: 12,
      name: 'Est1-C11',
      state: 'controlest1c11',
      etage: 1,
      url: 'http://10.1.2.5/magicmenu?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYTcwZWQwYWMwNmVmMDA0ZTdmMmM2MSIsInVzZXJuYW1lIjoiYXBwbGkxNDEiLCJuYW1lIjoiVXNlckFwcGxpMTQxIiwicm9sZXMiOlt7ImlkIjoiRGVtbyIsIm5hbWUiOiJEZW1vIiwiYWx0bmFtZSI6IkRlbW8iLCJocmNfYWNjZXNzX3JpZ2h0cyI6MCwiaHJjX2FsYXJtc19yaWdodHMiOjAsInJvbGVfaWQiOiJEZW1vIn0seyJpZCI6IkZ1bGwiLCJuYW1lIjoiRnVsbCIsImhyY19hY2Nlc3NfcmlnaHRzIjoyMCwiaHJjX2FsYXJtc19yaWdodHMiOjIwLCJyb2xlX2lkIjoiRnVsbCJ9LHsiaWQiOiJTYWxsZU1hcnNlaWxsZSIsIm5hbWUiOiJTYWxsZU1hcnNlaWxsZSIsImhyY19hY2Nlc3NfcmlnaHRzIjoxMCwiaHJjX2FsYXJtc19yaWdodHMiOjEwLCJyb2xlX2lkIjoiU2FsbGVNYXJzZWlsbGUifV19.5A3ITTwt_sv0Bv_hrAlGn4Kbp_qEn9yi2x2UzlN8Pno&point=RoomEst1C11&home=common+room'
    },
    {
      id: 's02',
      uuid: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
      major: 1,
      minor: 13,
      name: 'Est1-F06',
      state: 'controlest1f06',
      etage: 1,
      url: 'http://10.1.2.5/magicmenu?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYTcwZWQwYWMwNmVmMDA0ZTdmMmM2MSIsInVzZXJuYW1lIjoiYXBwbGkxNDEiLCJuYW1lIjoiVXNlckFwcGxpMTQxIiwicm9sZXMiOlt7ImlkIjoiRGVtbyIsIm5hbWUiOiJEZW1vIiwiYWx0bmFtZSI6IkRlbW8iLCJocmNfYWNjZXNzX3JpZ2h0cyI6MCwiaHJjX2FsYXJtc19yaWdodHMiOjAsInJvbGVfaWQiOiJEZW1vIn0seyJpZCI6IkZ1bGwiLCJuYW1lIjoiRnVsbCIsImhyY19hY2Nlc3NfcmlnaHRzIjoyMCwiaHJjX2FsYXJtc19yaWdodHMiOjIwLCJyb2xlX2lkIjoiRnVsbCJ9LHsiaWQiOiJTYWxsZU1hcnNlaWxsZSIsIm5hbWUiOiJTYWxsZU1hcnNlaWxsZSIsImhyY19hY2Nlc3NfcmlnaHRzIjoxMCwiaHJjX2FsYXJtc19yaWdodHMiOjEwLCJyb2xlX2lkIjoiU2FsbGVNYXJzZWlsbGUifV19.5A3ITTwt_sv0Bv_hrAlGn4Kbp_qEn9yi2x2UzlN8Pno&point=RoomEst1F06&home=common+room'
    },
    {
      id: 's03',
      uuid: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
      major: 1,
      minor: 3,
      name: 'Sud2-F00',
      state: 'controlsud2f00',
      etage: 2,
      url: 'http://10.1.2.5/magicmenu?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYTcwZWQwYWMwNmVmMDA0ZTdmMmM2MSIsInVzZXJuYW1lIjoiYXBwbGkxNDEiLCJuYW1lIjoiVXNlckFwcGxpMTQxIiwicm9sZXMiOlt7ImlkIjoiRGVtbyIsIm5hbWUiOiJEZW1vIiwiYWx0bmFtZSI6IkRlbW8iLCJocmNfYWNjZXNzX3JpZ2h0cyI6MCwiaHJjX2FsYXJtc19yaWdodHMiOjAsInJvbGVfaWQiOiJEZW1vIn0seyJpZCI6IkZ1bGwiLCJuYW1lIjoiRnVsbCIsImhyY19hY2Nlc3NfcmlnaHRzIjoyMCwiaHJjX2FsYXJtc19yaWdodHMiOjIwLCJyb2xlX2lkIjoiRnVsbCJ9LHsiaWQiOiJTYWxsZU1hcnNlaWxsZSIsIm5hbWUiOiJTYWxsZU1hcnNlaWxsZSIsImhyY19hY2Nlc3NfcmlnaHRzIjoxMCwiaHJjX2FsYXJtc19yaWdodHMiOjEwLCJyb2xlX2lkIjoiU2FsbGVNYXJzZWlsbGUifV19.5A3ITTwt_sv0Bv_hrAlGn4Kbp_qEn9yi2x2UzlN8Pno&point=RoomSud2F00&home=common+room'
    },
    {
      id: 's04',
      uuid: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
      name: 'Est1-F14',
      state: 'controlEst1f14',
      etage: 1,
      url: 'http://10.1.2.5/magicmenu?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYTcwZWQwYWMwNmVmMDA0ZTdmMmM2MSIsInVzZXJuYW1lIjoiYXBwbGkxNDEiLCJuYW1lIjoiVXNlckFwcGxpMTQxIiwicm9sZXMiOlt7ImlkIjoiRGVtbyIsIm5hbWUiOiJEZW1vIiwiYWx0bmFtZSI6IkRlbW8iLCJocmNfYWNjZXNzX3JpZ2h0cyI6MCwiaHJjX2FsYXJtc19yaWdodHMiOjAsInJvbGVfaWQiOiJEZW1vIn0seyJpZCI6IkZ1bGwiLCJuYW1lIjoiRnVsbCIsImhyY19hY2Nlc3NfcmlnaHRzIjoyMCwiaHJjX2FsYXJtc19yaWdodHMiOjIwLCJyb2xlX2lkIjoiRnVsbCJ9LHsiaWQiOiJTYWxsZU1hcnNlaWxsZSIsIm5hbWUiOiJTYWxsZU1hcnNlaWxsZSIsImhyY19hY2Nlc3NfcmlnaHRzIjoxMCwiaHJjX2FsYXJtc19yaWdodHMiOjEwLCJyb2xlX2lkIjoiU2FsbGVNYXJzZWlsbGUifV19.5A3ITTwt_sv0Bv_hrAlGn4Kbp_qEn9yi2x2UzlN8Pno&point=RoomEst1F14&home=common+room'
    },
    {
      id: 's05',
      uuid: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
      name: 'Sud1-F00',
      state: 'controlsud1f00',
      etage: 1,
      url: 'http://10.1.2.5/magicmenu?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYTcwZWQwYWMwNmVmMDA0ZTdmMmM2MSIsInVzZXJuYW1lIjoiYXBwbGkxNDEiLCJuYW1lIjoiVXNlckFwcGxpMTQxIiwicm9sZXMiOlt7ImlkIjoiRGVtbyIsIm5hbWUiOiJEZW1vIiwiYWx0bmFtZSI6IkRlbW8iLCJocmNfYWNjZXNzX3JpZ2h0cyI6MCwiaHJjX2FsYXJtc19yaWdodHMiOjAsInJvbGVfaWQiOiJEZW1vIn0seyJpZCI6IkZ1bGwiLCJuYW1lIjoiRnVsbCIsImhyY19hY2Nlc3NfcmlnaHRzIjoyMCwiaHJjX2FsYXJtc19yaWdodHMiOjIwLCJyb2xlX2lkIjoiRnVsbCJ9LHsiaWQiOiJTYWxsZU1hcnNlaWxsZSIsIm5hbWUiOiJTYWxsZU1hcnNlaWxsZSIsImhyY19hY2Nlc3NfcmlnaHRzIjoxMCwiaHJjX2FsYXJtc19yaWdodHMiOjEwLCJyb2xlX2lkIjoiU2FsbGVNYXJzZWlsbGUifV19.5A3ITTwt_sv0Bv_hrAlGn4Kbp_qEn9yi2x2UzlN8Pno&point=RoomSud1F00&home=common+room'
    },
    {
      id: 's06',
      uuid: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
      name: 'Ouest1-F01',
      state: 'controlouest1f01',
      etage: 1,
      url: 'http://10.1.2.5/magicmenu?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYTcwZWQwYWMwNmVmMDA0ZTdmMmM2MSIsInVzZXJuYW1lIjoiYXBwbGkxNDEiLCJuYW1lIjoiVXNlckFwcGxpMTQxIiwicm9sZXMiOlt7ImlkIjoiRGVtbyIsIm5hbWUiOiJEZW1vIiwiYWx0bmFtZSI6IkRlbW8iLCJocmNfYWNjZXNzX3JpZ2h0cyI6MCwiaHJjX2FsYXJtc19yaWdodHMiOjAsInJvbGVfaWQiOiJEZW1vIn0seyJpZCI6IkZ1bGwiLCJuYW1lIjoiRnVsbCIsImhyY19hY2Nlc3NfcmlnaHRzIjoyMCwiaHJjX2FsYXJtc19yaWdodHMiOjIwLCJyb2xlX2lkIjoiRnVsbCJ9LHsiaWQiOiJTYWxsZU1hcnNlaWxsZSIsIm5hbWUiOiJTYWxsZU1hcnNlaWxsZSIsImhyY19hY2Nlc3NfcmlnaHRzIjoxMCwiaHJjX2FsYXJtc19yaWdodHMiOjEwLCJyb2xlX2lkIjoiU2FsbGVNYXJzZWlsbGUifV19.5A3ITTwt_sv0Bv_hrAlGn4Kbp_qEn9yi2x2UzlN8Pno&point=RoomOuest1F01&home=common+room'
    },
    {
      id: 's07',
      uuid: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
      name: 'Ouest1-F08',
      state: 'controlouest1f08',
      etage: 1,
      url: 'http://10.1.2.5/magicmenu?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYTcwZWQwYWMwNmVmMDA0ZTdmMmM2MSIsInVzZXJuYW1lIjoiYXBwbGkxNDEiLCJuYW1lIjoiVXNlckFwcGxpMTQxIiwicm9sZXMiOlt7ImlkIjoiRGVtbyIsIm5hbWUiOiJEZW1vIiwiYWx0bmFtZSI6IkRlbW8iLCJocmNfYWNjZXNzX3JpZ2h0cyI6MCwiaHJjX2FsYXJtc19yaWdodHMiOjAsInJvbGVfaWQiOiJEZW1vIn0seyJpZCI6IkZ1bGwiLCJuYW1lIjoiRnVsbCIsImhyY19hY2Nlc3NfcmlnaHRzIjoyMCwiaHJjX2FsYXJtc19yaWdodHMiOjIwLCJyb2xlX2lkIjoiRnVsbCJ9LHsiaWQiOiJTYWxsZU1hcnNlaWxsZSIsIm5hbWUiOiJTYWxsZU1hcnNlaWxsZSIsImhyY19hY2Nlc3NfcmlnaHRzIjoxMCwiaHJjX2FsYXJtc19yaWdodHMiOjEwLCJyb2xlX2lkIjoiU2FsbGVNYXJzZWlsbGUifV19.5A3ITTwt_sv0Bv_hrAlGn4Kbp_qEn9yi2x2UzlN8Pno&point=RoomOuest1F08&home=common+room'
    },
    {
      id: 's08',
      uuid: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
      name: 'Ouest1-F09',
      state: 'controlouest1f09',
      etage: 1,
      url: 'http://10.1.2.5/magicmenu?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYTcwZWQwYWMwNmVmMDA0ZTdmMmM2MSIsInVzZXJuYW1lIjoiYXBwbGkxNDEiLCJuYW1lIjoiVXNlckFwcGxpMTQxIiwicm9sZXMiOlt7ImlkIjoiRGVtbyIsIm5hbWUiOiJEZW1vIiwiYWx0bmFtZSI6IkRlbW8iLCJocmNfYWNjZXNzX3JpZ2h0cyI6MCwiaHJjX2FsYXJtc19yaWdodHMiOjAsInJvbGVfaWQiOiJEZW1vIn0seyJpZCI6IkZ1bGwiLCJuYW1lIjoiRnVsbCIsImhyY19hY2Nlc3NfcmlnaHRzIjoyMCwiaHJjX2FsYXJtc19yaWdodHMiOjIwLCJyb2xlX2lkIjoiRnVsbCJ9LHsiaWQiOiJTYWxsZU1hcnNlaWxsZSIsIm5hbWUiOiJTYWxsZU1hcnNlaWxsZSIsImhyY19hY2Nlc3NfcmlnaHRzIjoxMCwiaHJjX2FsYXJtc19yaWdodHMiOjEwLCJyb2xlX2lkIjoiU2FsbGVNYXJzZWlsbGUifV19.5A3ITTwt_sv0Bv_hrAlGn4Kbp_qEn9yi2x2UzlN8Pno&point=RoomOuest1F09&home=common+room'
    },
    {
      id: 's09',
      uuid: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
      name: 'Ouest1-F13',
      state: 'controlouest1f13',
      etage: 1,
      url: 'http://10.1.2.5/magicmenu?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYTcwZWQwYWMwNmVmMDA0ZTdmMmM2MSIsInVzZXJuYW1lIjoiYXBwbGkxNDEiLCJuYW1lIjoiVXNlckFwcGxpMTQxIiwicm9sZXMiOlt7ImlkIjoiRGVtbyIsIm5hbWUiOiJEZW1vIiwiYWx0bmFtZSI6IkRlbW8iLCJocmNfYWNjZXNzX3JpZ2h0cyI6MCwiaHJjX2FsYXJtc19yaWdodHMiOjAsInJvbGVfaWQiOiJEZW1vIn0seyJpZCI6IkZ1bGwiLCJuYW1lIjoiRnVsbCIsImhyY19hY2Nlc3NfcmlnaHRzIjoyMCwiaHJjX2FsYXJtc19yaWdodHMiOjIwLCJyb2xlX2lkIjoiRnVsbCJ9LHsiaWQiOiJTYWxsZU1hcnNlaWxsZSIsIm5hbWUiOiJTYWxsZU1hcnNlaWxsZSIsImhyY19hY2Nlc3NfcmlnaHRzIjoxMCwiaHJjX2FsYXJtc19yaWdodHMiOjEwLCJyb2xlX2lkIjoiU2FsbGVNYXJzZWlsbGUifV19.5A3ITTwt_sv0Bv_hrAlGn4Kbp_qEn9yi2x2UzlN8Pno&point=RoomOuest1F13&home=common+room'
    },
    {
      id: 's10',
      uuid: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
      name: 'Est1-F00',
      state: 'controlest1f00',
      etage: 1,
      url: 'http://10.1.2.5/magicmenu?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYTcwZWQwYWMwNmVmMDA0ZTdmMmM2MSIsInVzZXJuYW1lIjoiYXBwbGkxNDEiLCJuYW1lIjoiVXNlckFwcGxpMTQxIiwicm9sZXMiOlt7ImlkIjoiRGVtbyIsIm5hbWUiOiJEZW1vIiwiYWx0bmFtZSI6IkRlbW8iLCJocmNfYWNjZXNzX3JpZ2h0cyI6MCwiaHJjX2FsYXJtc19yaWdodHMiOjAsInJvbGVfaWQiOiJEZW1vIn0seyJpZCI6IkZ1bGwiLCJuYW1lIjoiRnVsbCIsImhyY19hY2Nlc3NfcmlnaHRzIjoyMCwiaHJjX2FsYXJtc19yaWdodHMiOjIwLCJyb2xlX2lkIjoiRnVsbCJ9LHsiaWQiOiJTYWxsZU1hcnNlaWxsZSIsIm5hbWUiOiJTYWxsZU1hcnNlaWxsZSIsImhyY19hY2Nlc3NfcmlnaHRzIjoxMCwiaHJjX2FsYXJtc19yaWdodHMiOjEwLCJyb2xlX2lkIjoiU2FsbGVNYXJzZWlsbGUifV19.5A3ITTwt_sv0Bv_hrAlGn4Kbp_qEn9yi2x2UzlN8Pno&point=RoomEst1F00&home=common+room'
    },
    {
      id: 's11',
      uuid: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
      name: 'Est2-F06',
      state: 'controlest2f06',
      etage: 2,
      url: 'http://10.1.2.5/magicmenu?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYTcwZWQwYWMwNmVmMDA0ZTdmMmM2MSIsInVzZXJuYW1lIjoiYXBwbGkxNDEiLCJuYW1lIjoiVXNlckFwcGxpMTQxIiwicm9sZXMiOlt7ImlkIjoiRGVtbyIsIm5hbWUiOiJEZW1vIiwiYWx0bmFtZSI6IkRlbW8iLCJocmNfYWNjZXNzX3JpZ2h0cyI6MCwiaHJjX2FsYXJtc19yaWdodHMiOjAsInJvbGVfaWQiOiJEZW1vIn0seyJpZCI6IkZ1bGwiLCJuYW1lIjoiRnVsbCIsImhyY19hY2Nlc3NfcmlnaHRzIjoyMCwiaHJjX2FsYXJtc19yaWdodHMiOjIwLCJyb2xlX2lkIjoiRnVsbCJ9LHsiaWQiOiJTYWxsZU1hcnNlaWxsZSIsIm5hbWUiOiJTYWxsZU1hcnNlaWxsZSIsImhyY19hY2Nlc3NfcmlnaHRzIjoxMCwiaHJjX2FsYXJtc19yaWdodHMiOjEwLCJyb2xlX2lkIjoiU2FsbGVNYXJzZWlsbGUifV19.5A3ITTwt_sv0Bv_hrAlGn4Kbp_qEn9yi2x2UzlN8Pno&point=RoomEst2F06&home=common+room'
    },
    {
      id: 's12',
      uuid: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
      name: 'Est2-F08',
      state: 'controlest2f08',
      etage: 2,
      url: 'http://10.1.2.5/magicmenu?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYTcwZWQwYWMwNmVmMDA0ZTdmMmM2MSIsInVzZXJuYW1lIjoiYXBwbGkxNDEiLCJuYW1lIjoiVXNlckFwcGxpMTQxIiwicm9sZXMiOlt7ImlkIjoiRGVtbyIsIm5hbWUiOiJEZW1vIiwiYWx0bmFtZSI6IkRlbW8iLCJocmNfYWNjZXNzX3JpZ2h0cyI6MCwiaHJjX2FsYXJtc19yaWdodHMiOjAsInJvbGVfaWQiOiJEZW1vIn0seyJpZCI6IkZ1bGwiLCJuYW1lIjoiRnVsbCIsImhyY19hY2Nlc3NfcmlnaHRzIjoyMCwiaHJjX2FsYXJtc19yaWdodHMiOjIwLCJyb2xlX2lkIjoiRnVsbCJ9LHsiaWQiOiJTYWxsZU1hcnNlaWxsZSIsIm5hbWUiOiJTYWxsZU1hcnNlaWxsZSIsImhyY19hY2Nlc3NfcmlnaHRzIjoxMCwiaHJjX2FsYXJtc19yaWdodHMiOjEwLCJyb2xlX2lkIjoiU2FsbGVNYXJzZWlsbGUifV19.5A3ITTwt_sv0Bv_hrAlGn4Kbp_qEn9yi2x2UzlN8Pno&point=RoomEst2F08&home=common+room'
    },
    {
      id: 's13',
      uuid: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
      name: 'Est2-F23',
      state: 'controlest2f23',
      etage: 2,
      url: 'http://10.1.2.5/magicmenu?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYTcwZWQwYWMwNmVmMDA0ZTdmMmM2MSIsInVzZXJuYW1lIjoiYXBwbGkxNDEiLCJuYW1lIjoiVXNlckFwcGxpMTQxIiwicm9sZXMiOlt7ImlkIjoiRGVtbyIsIm5hbWUiOiJEZW1vIiwiYWx0bmFtZSI6IkRlbW8iLCJocmNfYWNjZXNzX3JpZ2h0cyI6MCwiaHJjX2FsYXJtc19yaWdodHMiOjAsInJvbGVfaWQiOiJEZW1vIn0seyJpZCI6IkZ1bGwiLCJuYW1lIjoiRnVsbCIsImhyY19hY2Nlc3NfcmlnaHRzIjoyMCwiaHJjX2FsYXJtc19yaWdodHMiOjIwLCJyb2xlX2lkIjoiRnVsbCJ9LHsiaWQiOiJTYWxsZU1hcnNlaWxsZSIsIm5hbWUiOiJTYWxsZU1hcnNlaWxsZSIsImhyY19hY2Nlc3NfcmlnaHRzIjoxMCwiaHJjX2FsYXJtc19yaWdodHMiOjEwLCJyb2xlX2lkIjoiU2FsbGVNYXJzZWlsbGUifV19.5A3ITTwt_sv0Bv_hrAlGn4Kbp_qEn9yi2x2UzlN8Pno&point=RoomEst2F23&home=common+room'
    },
    {
      id: 's14',
      uuid: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
      name: 'Est2-F22',
      state: 'controlest2f22',
      etage: 2,
      url: 'http://10.1.2.5/magicmenu?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYTcwZWQwYWMwNmVmMDA0ZTdmMmM2MSIsInVzZXJuYW1lIjoiYXBwbGkxNDEiLCJuYW1lIjoiVXNlckFwcGxpMTQxIiwicm9sZXMiOlt7ImlkIjoiRGVtbyIsIm5hbWUiOiJEZW1vIiwiYWx0bmFtZSI6IkRlbW8iLCJocmNfYWNjZXNzX3JpZ2h0cyI6MCwiaHJjX2FsYXJtc19yaWdodHMiOjAsInJvbGVfaWQiOiJEZW1vIn0seyJpZCI6IkZ1bGwiLCJuYW1lIjoiRnVsbCIsImhyY19hY2Nlc3NfcmlnaHRzIjoyMCwiaHJjX2FsYXJtc19yaWdodHMiOjIwLCJyb2xlX2lkIjoiRnVsbCJ9LHsiaWQiOiJTYWxsZU1hcnNlaWxsZSIsIm5hbWUiOiJTYWxsZU1hcnNlaWxsZSIsImhyY19hY2Nlc3NfcmlnaHRzIjoxMCwiaHJjX2FsYXJtc19yaWdodHMiOjEwLCJyb2xlX2lkIjoiU2FsbGVNYXJzZWlsbGUifV19.5A3ITTwt_sv0Bv_hrAlGn4Kbp_qEn9yi2x2UzlN8Pno&point=RoomEst2F22&home=common+room'
    },
    {
      id: 's15',
      uuid: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
      name: 'Est2-C11',
      state: 'controlest2c11',
      etage: 2,
      url: 'http://10.1.2.5/magicmenu?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYTcwZWQwYWMwNmVmMDA0ZTdmMmM2MSIsInVzZXJuYW1lIjoiYXBwbGkxNDEiLCJuYW1lIjoiVXNlckFwcGxpMTQxIiwicm9sZXMiOlt7ImlkIjoiRGVtbyIsIm5hbWUiOiJEZW1vIiwiYWx0bmFtZSI6IkRlbW8iLCJocmNfYWNjZXNzX3JpZ2h0cyI6MCwiaHJjX2FsYXJtc19yaWdodHMiOjAsInJvbGVfaWQiOiJEZW1vIn0seyJpZCI6IkZ1bGwiLCJuYW1lIjoiRnVsbCIsImhyY19hY2Nlc3NfcmlnaHRzIjoyMCwiaHJjX2FsYXJtc19yaWdodHMiOjIwLCJyb2xlX2lkIjoiRnVsbCJ9LHsiaWQiOiJTYWxsZU1hcnNlaWxsZSIsIm5hbWUiOiJTYWxsZU1hcnNlaWxsZSIsImhyY19hY2Nlc3NfcmlnaHRzIjoxMCwiaHJjX2FsYXJtc19yaWdodHMiOjEwLCJyb2xlX2lkIjoiU2FsbGVNYXJzZWlsbGUifV19.5A3ITTwt_sv0Bv_hrAlGn4Kbp_qEn9yi2x2UzlN8Pno&point=RoomEst2C11&home=common+room'
    },
    {
      id: 's16',
      uuid: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
      name: 'Est2-C22',
      state: 'controlest2c22',
      etage: 2,
      url: 'http://10.1.2.5/magicmenu?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYTcwZWQwYWMwNmVmMDA0ZTdmMmM2MSIsInVzZXJuYW1lIjoiYXBwbGkxNDEiLCJuYW1lIjoiVXNlckFwcGxpMTQxIiwicm9sZXMiOlt7ImlkIjoiRGVtbyIsIm5hbWUiOiJEZW1vIiwiYWx0bmFtZSI6IkRlbW8iLCJocmNfYWNjZXNzX3JpZ2h0cyI6MCwiaHJjX2FsYXJtc19yaWdodHMiOjAsInJvbGVfaWQiOiJEZW1vIn0seyJpZCI6IkZ1bGwiLCJuYW1lIjoiRnVsbCIsImhyY19hY2Nlc3NfcmlnaHRzIjoyMCwiaHJjX2FsYXJtc19yaWdodHMiOjIwLCJyb2xlX2lkIjoiRnVsbCJ9LHsiaWQiOiJTYWxsZU1hcnNlaWxsZSIsIm5hbWUiOiJTYWxsZU1hcnNlaWxsZSIsImhyY19hY2Nlc3NfcmlnaHRzIjoxMCwiaHJjX2FsYXJtc19yaWdodHMiOjEwLCJyb2xlX2lkIjoiU2FsbGVNYXJzZWlsbGUifV19.5A3ITTwt_sv0Bv_hrAlGn4Kbp_qEn9yi2x2UzlN8Pno&point=RoomEst2C22&home=common+room'
    }
  ];

  return beacons;
});
