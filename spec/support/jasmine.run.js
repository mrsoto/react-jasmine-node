import Jasmine from 'jasmine'

var jasmine = new Jasmine()
jasmine.loadConfigFile('spec/support/jasmine.json')

jasmine.onComplete(function(passed) {
    if(!passed) {
        console.log('*********** At least one spec has failed ***********');
    }
});

jasmine.execute()
