// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderListItem } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="item incompleted"><div class="button-container"><div class="delete"></div><div class="incomplete"></div></div><div class="info-container"><h3>Name</h3><p>Quantity: 5</p></div></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderListItem({
        completed: false,
        name: 'Name',
        quantity: 5
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
