'use strict';

(function() {
  const data = [
    {
      id: 'box1',
      title: 'First box',
      content: 'Lorem ipsum dolor sit amet! 11',
      categories: ['highlighted', 'special-header', 'important']
    },
    {
      id: 'box2',
      title: 'Second box',
      content: 'Lorem ipsum dolor sit amet! 222',
      categories: ['special-header', 'important']
    },
    {
      id: 'box3',
      title: 'Third box',
      content: 'Lorem ipsum dolor sit amet! 333',
      categories: ['highlighted', 'important']
    },
    {
      id: 'box4',
      title: 'Fourth box',
      content: 'Lorem ipsum dolor sit amet! 444',
      categories: ['highlighted']
    },
    {
      id: 'box5',
      title: 'Fifth box',
      content: 'Lorem ipsum dolor sit amet! 555',
      categories: []
    }
  ];

  const content = document.querySelector('#content');

  data.forEach(x => {
    // creating parent element for each record in data list
    let box = document.createElement('div');
    // setting parents id to the ID of the given object inside a list
    box.setAttribute('id', x.id);
    // Setting the overall class of the parent element
    let attr = ['box', 'card'];
    // Adding additional classes derived from data list
    x.categories.forEach(y => {
      attr.push(y);
    });
    // adding all the classes combined to the parent
    box.setAttribute('class', attr.join(' '));

    // Creating header
    let header = document.createElement('div');
    header.setAttribute('class', 'header');
    header.innerHTML = x.title;

    let boxBody = document.createElement('p');
    boxBody.setAttribute('class', 'card-text');
    boxBody.innerHTML = x.content;
    box.appendChild(header);
    box.appendChild(boxBody);
    content.appendChild(box);
  });
})();
