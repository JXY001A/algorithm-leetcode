

import { buildBinaryTree } from "./index";

describe("全排列 II",()=>{
    test("buildBinaryTree 1", () => {
        const result = {
            "val": 1,
            "left": null,
            "right": {
                "val": 2,
                "left": {
                    "val": 3,
                    "left": null,
                    "right": null
                },
                "right": null
            }
        }
        expect(buildBinaryTree([1,null,2,3])).toEqual(result);
    });
    
    test("buildBinaryTree 2", () => {
        const result = {
            "val": 1,
            "left": {
                "val": 2,
                "left": {
                    "val": 4,
                    "left": null,
                    "right": null
                },
                "right": {
                    "val": 5,
                    "left": {
                        "val": 6,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "val": 7,
                        "left": null,
                        "right": null
                    }
                }
            },
            "right": {
                "val": 3,
                "left": null,
                "right": {
                    "val": 8,
                    "left": {
                        "val": 9,
                        "left": null,
                        "right": null
                    },
                    "right": null
                }
            }
        };
        expect(buildBinaryTree([1,2,3,4,5,null,8,null,null,6,7,9])).toEqual(result);
    });

});
