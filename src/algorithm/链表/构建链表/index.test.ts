import {buildLinkedList } from './index';
describe("构建链表",()=>{
test('buildLinkedList 1',()=>{
        const header = {
            val:1,
            next:{
                val:2,
                next:{
                    val:3,
                    next:{
                        val:4,
                        next:{
                            val:5,
                            next:null
                        },
                    },
                },
            },
        };
        expect(buildLinkedList([1,2,3,4,5])).toEqual(header);
    });
});