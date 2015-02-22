/* jasmine specs for controllers */
describe('AngularJS Blog Service Testing', function () {   


    describe('test BlogList', function () {       
        var $rootScope;
        var blogList;

        beforeEach(module('blogServices'));

        beforeEach(inject(function ($injector) {           
            $rootScope = $injector.get('$rootScope');
            blogList = $injector.get('BlogList');
        }));

        it('should test BlogList service', function () {            
            expect(blogList).toBeDefined();
        });

    });

     describe('test BlogPost', function () {       
        var $rootScope;
        var blogPost;

        beforeEach(module('blogServices'));

        beforeEach(inject(function ($injector) {           
            $rootScope = $injector.get('$rootScope');
            blogPost = $injector.get('BlogPost');
        }));

        it('should test BlogPost service', function () {            
            expect(blogPost).toBeDefined();
        });

    });
    
     describe('test Login', function () {       
        var $rootScope;
        var login;

        beforeEach(module('blogServices'));

        beforeEach(inject(function ($injector) {           
            $rootScope = $injector.get('$rootScope');
            login = $injector.get('Login');
        }));

        it('should test Login service', function () {            
            expect(login).toBeDefined();
        });

    });

});
