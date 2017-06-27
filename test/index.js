let update_deep = require('..')
let { expect } = require('chai')

describe('test update object', function(){
    it("single level", function(){
        let a = {foo: 'bar'}
        let b = update_deep(a, ['foo', _=>'baz'])
        expect(b).not.equal(a)
        expect(b).eql({foo: 'baz'})
    })
    it("multiple level", function(){
        let a = {foo: {bar: 'baz'}}
        let b = update_deep(a, ['foo', 'bar', z=>z+'z'])
        expect(b).not.equal(a)
        expect(b).eql({foo: {bar: 'bazz'}})
    })
    it("multiple level from empty", function(){
        let a = {}
        let b = update_deep(a, ['foo', 'bar', 'baz'])
        expect(b).not.equal(a)
        expect(b).eql({foo: {bar: 'baz'}})
    })
})

describe('test update array', function(){
    it("single level", function(){
        let a = ['bar']
        let b = update_deep(a, [0, _=>'baz'])
        expect(b).not.equal(a)
        expect(b).eql(['baz'])
    })
    it("multiple level", function(){
        let a = [['foo', 'bar']]
        let b = update_deep(a, [0, 1, _=>'baz'])
        expect(b).not.equal(a)
        expect(b).eql([['foo', 'baz']])
    })
    it("multiple level from empty", function(){
        let a = []
        let b = update_deep(a, [0, 1, _=>'foo'])
        expect(b).not.equal(a)
        expect(b).eql([[undefined, 'foo']])
    })
})
