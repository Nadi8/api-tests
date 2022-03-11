
import { expect } from 'chai';
import supertest from 'supertest';


describe('API Tests', function() {
const request = supertest("https://jsonplaceholder.typicode.com");

   describe('get all users', function() {
    it('Response status code should be 200', function() {
        return request
            .get('/posts').then((res) => {
                expect(res.statusCode).to.eq(200);         
        })
    })
   
    it('Users count is 100', function() {
        return request
            .get('/posts').then((res) => {
                expect(res.body.length).to.be.eq(100);                        
        })
    })
   }) 
    
   describe('userId', function() {
    it('userId 1 contains 10 ids', function() {
        return request
            .get('/posts?userId=1').then((res) => {
                expect(res.body.length).to.be.eq(10);                      
        })
    })      
   }) 
   
   describe('id', function() {
    it('Title of id 4 contains eum et est occaecati', function() {
        return request
            .get('/posts?id=4').then((res) => {
                expect(res.text).contains('eum et est occaecati');                      
        })
    })    
   }) 
})


