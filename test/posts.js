
import { expect } from 'chai';
import supertest from 'supertest';
const request = supertest("https://jsonplaceholder.typicode.com");

describe('Posts', function() {
    
    it('GET/posts status code should be 200', function() {
        return request
            .get('/posts').then((res) => {
                expect(res.statusCode).to.equal(200);         
        })
    })

    it('response body contains list of 2 or more items', function() {
        return request
            .get('/posts').then((res) => {
            expect(res.body.length).to.be.at.least(2);       
        })
    })    

    it('id count is 100', function() {
     return request
         .get('/posts').then((res) => {
            expect(res.body.length).to.be.equal(100);                        
        })
    })

    it('userId 1 count is 10', function() {
        return request
            .get('/posts?userId=1').then((res) => {
            expect(res.body.length).to.be.equal(10);                      
        })
    })

    it('Title of id 4', function() {
        return request
            .get('/posts?id=4').then((res) => {
            expect(res.text).contains('eum et est occaecati');                      
        })
    })

    

})


