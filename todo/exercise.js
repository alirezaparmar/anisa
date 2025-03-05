// 28

خروجی این کد 10 خواهد بود.

دلیل این خروجی به دلیل خصوصیت Closure در جاوااسکریپت است.
 وقتی تابع inner فراخوانی می‌شود، هنوز به متغیر x در تابع outer
  دسترسی دارد، حتی اگر اجرای تابع outer به پایان رسیده باشد.
   این به خاطر این است که توابع در جاوااسکریپت قادر به "بستن"
    یا "به یاد سپردن" متغیرهایی که در حیطه (Scope) آن‌ها تعریف
     شده‌اند، هستند. در نتیجه، تابع inner می‌تواند مقدار x را
      که برابر با
 ۱۰ است، بخواند و در کنسول چاپ کند.

//  29

function counter() {
    var count = 0;
    return function() {
        count++;
        return count;
    };
}

var myCounter = counter();
console.log(myCounter()); 
console.log(myCounter()); 
console.log(myCounter()); 

// 30

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];


var evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});


var doubledNumbers = evenNumbers.map(function(number) {
    return number * 2;
});

console.log(doubledNumbers); 


// 31

function toCamelCase(str) {
    return str.replace(/_([a-z])/g, function (match, letter) {
      return letter.toUpperCase();
    });
  }
  
  function convert(obj) {
    if (Array.isArray(obj)) {
      return obj.map(convert);
    } else if (obj !== null && typeof obj === 'object') {
      return Object.keys(obj).reduce((acc, key) => {
        const camelCaseKey = toCamelCase(key);
        acc[camelCaseKey] = convert(obj[key]);
        return acc;
      }, {});
    }
    return obj;
  }
  
  var obj = {
    charlize_theron: 23,
    brad_pitt: ['angelina_jolie', 'Nicole Kidman'],
    jennifer_lawrence: {
      jennifer_aniston: 22,
      jennifer_connelly: 63
    }
  };
  
  var newObj = convert(obj);
  
  console.log(newObj);

//   32

function buildTree(data, parentId = null) {
    return data
      .filter(item => item.parentId === parentId)
      .map(item => {
        const children = buildTree(data, item.id);
        return children.length ? { ...item, children } : { ...item };
      });
  }
  
  function convert(data) {
    const tree = buildTree(data);
    return tree.length ? tree[0] : {};
  }
  
  var data = [
    { id: 1, title: 'Yek', parentId: null },
    { id: 2, title: 'Do', parentId: 1 },
    { id: 3, title: 'Se', parentId: 1 },
    { id: 4, title: 'Chahar', parentId: 2 },
    { id: 5, title: 'Panj', parentId: 2 },
    { id: 6, title: 'Shesh', parentId: 3 }
  ];
  
  var newData = convert(data);
  
  console.log(JSON.stringify(newData, null, 2));

//   33

function generateUrl(obj) {
    
    let url = obj.url.replace(/:\w+/g, function(match) {
      const paramName = match.slice(1);
      return obj.params[paramName] !== undefined ? obj.params[paramName] : '';
    });
  
   
    const queryString = Object.keys(obj.query)
      .map(key => `${key}=${encodeURIComponent(obj.query[key])}`)
      .join('&');
  
   
    if (queryString) {
      url += '?' + queryString;
    }
  
    return url;
  }
  
  var obj = {
    url: 'https://ali.com/api/article/:id/:title',
    params: {
      id: 19,
      date: '2020-12-06'
    },
    query: {
      page: 12,
      size: 20,
      language: 'en'
    }
  };
  
  var url = generateUrl(obj);
  
  console.log(url); // https://ali.com/api/article/19?page=12&size=20&language=en
  

//   34

function sort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  var numbers = [5, 2, 9, 1, 5, 6];
  console.log(sort(numbers)); 
  
